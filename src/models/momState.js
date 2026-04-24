import { Schema, model } from 'mongoose';

const momStateSchema = new Schema(
  {
    week: {
      type: Number,
      required: [true, 'Week is required'],
      min: [1, 'Week must be at least 1'],
      max: [40, 'Week must be at most 40'],
      unique: true,
    },
    feelings: {
      type: String,
      required: [true, 'Feelings description is required'],
    },
    tips: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const MomState = model('MomState', momStateSchema);
