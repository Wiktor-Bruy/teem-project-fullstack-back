import createHttpError from 'http-errors';
import { Note } from '../../models/note.js';

export const getNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findByID(noteId);

    if (!note) {
      throw createHttpError(404, 'Note not found');
    }

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};
