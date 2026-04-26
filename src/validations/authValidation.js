import { Joi, Segments } from 'celebrate';
import { GENDER } from '../constatnts/gender.js';

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().max(32).required(),
    email: Joi.string().email().max(64).required(),
    password: Joi.string().min(8).max(128).required(),
    gender: Joi.valid(...GENDER),
    dueDate: Joi.string()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().max(64).required(),
    password: Joi.string().min(8).max(128).required(),
  }),
};
