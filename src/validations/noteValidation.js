import { Joi, Segments } from 'celebrate';

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({}),
};

export const updateNoteSchema = {
  [Segments.BODY]: Joi.object({}),
  [Segments.PARAMS]: Joi.object({}),
};

export const deleteNoteSchema = {
  [Segments.PARAMS]: Joi.object({}),
};

export const getNoteSchema = {
  [Segments.PARAMS]: Joi.object({}),
};
