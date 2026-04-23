import { Schema, model } from 'mongoose';

const momStateScema = new Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
  },
);

export const MomState = model('MomState', momStateScema);
