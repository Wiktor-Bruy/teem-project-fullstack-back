import createHttpError from "http-errors";
import { Note } from "../../models/note.js";

export async function getNotes(req, res) {
  const { _id: userId } = req.user;

  const notes = await Note.find({ userId });

  if (!notes) {
    throw createHttpError(404, "Notes not found");
  }

  res.status(200).json(notes);
}
