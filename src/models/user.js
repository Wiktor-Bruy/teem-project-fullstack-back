import { Schema, model } from 'mongoose';

const userScema = new Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model('User', userScema);
