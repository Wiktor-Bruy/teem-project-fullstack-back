import { Schema, model } from 'mongoose';

const babyStateScema = new Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
  },
);

export const BabyState = model('BabyState', babyStateScema);
