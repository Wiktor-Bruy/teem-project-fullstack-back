import { Schema, model } from 'mongoose';

const taskScema = new Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Task = model('Task', taskScema);
