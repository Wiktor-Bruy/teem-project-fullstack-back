import { Schema, model } from 'mongoose';

const emotionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    icon: {
      type: String,
      required: [true, 'Icon is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Emotion = model('Emotion', emotionSchema);
