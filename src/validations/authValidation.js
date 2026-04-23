import { Joi, Segments } from 'celebrate';

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({}),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({}),
};
