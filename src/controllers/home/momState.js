import MomState from '../models/MomState.js';

export async function momState(req, res) {
  try {
    const { dueDate } = req.user;
    const today = new Date();
    const due = new Date(dueDate);

    const msPerWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksLeft = Math.ceil((due - today) / msPerWeek);
    const weekNumber = 40 - weeksLeft;
    if (weekNumber < 1 || weekNumber > 40) {
      return res.status(400).json({ message: 'Невірна дата пологів або вагітність вже завершена' });
    }
    const state = await MomState.findOne({ weekNumber });

    if (!state) {
      return res.status(404).json({ message: `Дані для тижня ${weekNumber} не знайдені` });
    }
    return res.status(200).json({ momState: state });

  } catch (error) {
    console.error('momState error:', error);
    return res.status(500).json({ message: 'Серверна помилка' });
  }
}
