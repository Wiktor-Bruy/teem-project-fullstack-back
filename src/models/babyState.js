import { Schema, model } from 'mongoose';

const babyStateSchema = new Schema(
  {
    week: {
      type: Number,
      required: [true, 'Week is required'],
      min: [1, 'Week must be at least 1'],
      max: [40, 'Week must be at most 40'],
      unique: true,
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    size: {
      type: String,
      required: [true, 'Size is required'],
    },
    achievement: {
      type: String,
      required: [true, 'Achievement is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const BabyState = model('BabyState', babyStateSchema);
