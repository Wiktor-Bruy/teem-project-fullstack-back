import { Schema, model } from 'mongoose';

const sessionScema = new Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Session = model('Session', sessionScema);
