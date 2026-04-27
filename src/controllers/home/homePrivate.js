import createHttpError from 'http-errors';
import BabyState from '../models/BabyState.js';

export async function homePrivate(req, res) {
  try {
    const { dueDate } = req.user;

    const today = new Date();
    const due = new Date(dueDate);

    const msPerDay = 1000 * 60 * 60 * 24;
    const msPerWeek = msPerDay * 7;

    const weeksLeft = Math.ceil((due - today) / msPerWeek);
    const weekNumber = 42 - weeksLeft;

    const daysLeft = Math.ceil((due - today) / msPerDay);

    const currentDayOfWeek = 294 - daysLeft - (weekNumber - 1) * 7;

    if (weekNumber < 1 || weekNumber > 42) {
      throw createHttpError(
        400,
        'Невірна дата пологів або вагітність вже завершена',
      );
    }

    const baby = await BabyState.findOne({ weekNumber });
    let babyState;
    if (!baby) {
      babyState = 'Інформацію про малюка не знайдено.';
    } else {
      const babySize = baby.babySize;
      const babyWeight = baby.babyWeight;
      const image = baby.image;
      const babyActivity = baby.babyActivity;
      const babyDevelopment = baby.babyDevelopment;
      const momDailyTips =
        baby.momDailyTips?.[currentDayOfWeek] || 'Порада не знайдена';

      babyState = {
        babySize,
        babyWeight,
        image,
        babyActivity,
        babyDevelopment,
        momDailyTips,
      };
    }

    return res.status(200).json({
      currentWeek: weekNumber,
      daysLeft,
      babyState,
    });
  } catch (error) {
    console.error('homePrivate error:', error);
    throw createHttpError(500, 'Серверна помилка');
  }
}
