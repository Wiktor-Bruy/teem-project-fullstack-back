import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 1,
      maxLength: 64,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      minLength: 1,
      maxLength: 1000,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
    emotions: {
      type: [String],
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model('Note', noteSchema);
