import { Joi, Segments } from 'celebrate';

export const getUserSchema = {
  [Segments.PARAMS]: Joi.object({}),
};

export const updateUserSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().trim(),
    gender: Joi.string(),
    dueDate: Joi.string(),
  }),
};
