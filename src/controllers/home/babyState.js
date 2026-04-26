import MomState from '../models/MomState.js';
import BabyState from '../models/BabyState.js';

export async function homePrivate(req, res) {
  try {
    const { dueDate } = req.user;

    const today = new Date();
    const due = new Date(dueDate);

    const msPerDay = 1000 * 60 * 60 * 24;
    const msPerWeek = msPerDay * 7;

    const weeksLeft = Math.ceil((due - today) / msPerWeek);
    const weekNumber = 40 - weeksLeft;

    const daysLeft = Math.ceil((due - today) / msPerDay);

    if (weekNumber < 1 || weekNumber > 40) {
      return res.status(400).json({ message: 'Невірна дата пологів або вагітність вже завершена' });
    }

    const [momState, babyState] = await Promise.all([
      MomState.findOne({ weekNumber }),
      BabyState.findOne({ weekNumber }),
    ]);

    return res.status(200).json({
      weekNumber,
      daysLeft,
      momState: momState || null,
      babyState: babyState || null,
    });

  } catch (error) {
    console.error('homePrivate error:', error);
    return res.status(500).json({ message: 'Серверна помилка' });
  }
}
