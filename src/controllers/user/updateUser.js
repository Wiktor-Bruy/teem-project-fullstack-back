import { User } from '../../models/user.js';
import createHttpError from 'http-errors';

export async function updateUser(req, res, next) {
  try {
    const userId = req.user?.userId;
    const { name, gender, dueDate } = req.body;

    if (!userId) {
      throw createHttpError(401, 'User not authenticated');
    }

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (gender !== undefined) updateData.gender = gender;
    if (dueDate !== undefined) updateData.dueDate = dueDate;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      throw createHttpError(404, 'User not found');
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
