import { Joi, Segments } from 'celebrate';

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({}),
};

export const updateNoteSchema = {
  [Segments.BODY]: Joi.object({}),
  [Segments.PARAMS]: Joi.object({}),
};

export const deleteNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().min(3).required(),
  }),
};

export const getNoteSchema = {
  [Segments.PARAMS]: Joi.object({}),
};
