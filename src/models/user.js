import { Schema, model } from 'mongoose';
import { GENDER } from '../constatnts/gender';


const userScema = new Schema(
  {
  name: { type: String, trim: true },
   email: { type: String, unique: true, required: true, trim: true },
   password: { type: String, required: true },
   gender: { type: String, enum: GENDER },
   dueDate: { type: String, required: true },

   avatar: {
     type: String,
     required: false,
     default: 'https://ac.goit.global/fullstack/react/default-avatar.jpg',
   },
},
  {
    timestamps: true,
    versionKey: false,
  },
);

userScema.methods.toJSON = function () {
 const obj = this.toObject();
 delete obj.password;
 return obj;
};

export const User = model('User', userScema);
