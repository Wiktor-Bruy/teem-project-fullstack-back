import { Joi, Segments } from 'celebrate';

export const babyStateSchema = {
  [Segments.QUERY]: Joi.object({
    week: Joi.number().min(1).max(42),
  }),
};

export const momStateSchema = {
  [Segments.QUERY]: Joi.object({
    week: Joi.number().min(1).max(42),
  }),
};
