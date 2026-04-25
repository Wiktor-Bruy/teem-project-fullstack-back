import createHttpError from "http-errors";
import { Note } from "../../models/note.js";

export async function deleteNote(req, res) { 
    const { noteId } = req.params;
    const note = await Note.findOneAndDelete({
        _id: noteId,
    });

    if (!note) {
        throw createHttpError(404, "Note not found");
    }

    res.status(200).json(note);
};
