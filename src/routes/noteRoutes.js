import { Router } from 'express';
import { celebrate } from 'celebrate';

import { authenticate } from '../middleware/authenticate.js';
import {
  createNoteSchema,
  getNoteSchema,
  updateNoteSchema,
  deleteNoteSchema,
} from '../validations/noteValidation.js';
import { createNote } from '../controllers/note/createNote.js';
import { getNotes } from '../controllers/note/getNotes.js';
import { getNote } from '../controllers/note/getNote.js';
import { updateNote } from '../controllers/note/updateNote.js';
import { deleteNote } from '../controllers/note/deleteNote.js';

const router = Router();

router.get('/note', authenticate, getNotes);
router.post('/note', authenticate, celebrate(createNoteSchema), createNote);
router.get('/note/:noteId', authenticate, celebrate(getNoteSchema), getNote);
router.put(
  '/note/:noteId',
  authenticate,
  celebrate(updateNoteSchema),
  updateNote,
);
router.delete(
  '/note/:noteId',
  authenticate,
  celebrate(deleteNoteSchema),
  deleteNote,
);

export default router;
