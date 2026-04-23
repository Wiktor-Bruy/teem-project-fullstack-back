import { Schema, model } from 'mongoose';

const noteScema = new Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model('Note', noteScema);
