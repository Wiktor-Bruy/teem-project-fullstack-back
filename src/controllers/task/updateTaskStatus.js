import { Task } from '../../models/task.js';

export async function updateTaskStatus(req, res) {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: taskId, owner: req.user._id },
      { status },
      { returnDocument: 'after' },
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
