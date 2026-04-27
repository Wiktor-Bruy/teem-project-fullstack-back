<<<<<<< HEAD
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
=======
import { BabyState } from '../../models/babyState.js';
import { getCurrentWeek } from '../../services/term.js';

export const getBabyState = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user || !user.dueDate) {
      return res.status(400).json({ message: 'No due date provided' });
    }

    const currentWeek = getCurrentWeek(new Date(user.dueDate));

    const babyState = await BabyState.findOne({ weekNumber: currentWeek });

    if (!babyState) {
      return res.status(404).json({ message: 'Baby state not found' });
    }

    res.status(200).json(babyState);
  } catch (error) {
    next(error);
  }
};
>>>>>>> 83fd07c1a015c2e560e60bc6a89ff30a901fb710
