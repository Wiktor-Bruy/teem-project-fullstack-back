import { Joi, Segments } from 'celebrate';

export const createTaskSchema = {
  [Segments.BODY]: Joi.object({}),
};

export const updateStatusTaskSchema = {
  [Segments.PARAMS]: Joi.object({}),
};
