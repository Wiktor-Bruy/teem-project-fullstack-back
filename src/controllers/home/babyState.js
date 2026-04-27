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
