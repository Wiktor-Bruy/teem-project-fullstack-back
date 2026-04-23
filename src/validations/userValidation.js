import { Joi, Segments } from 'celebrate';

export const getUserSchema = {
  [Segments.PARAMS]: Joi.object({}),
};

export const updateUserSchema = {
  [Segments.BODY]: Joi.object({}),
};
