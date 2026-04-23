import { Schema, model } from 'mongoose';

const emotionScema = new Schema(
  {},
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Emotion = model('Emotion', emotionScema);
