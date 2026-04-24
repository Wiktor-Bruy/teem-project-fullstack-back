import{User} from '../models/user.js'

export function daysLeft(milisec) {
  const day = 1000 * 60 * 60 * 24;
  const diff= new Date(dueDate).getTime() - new Date();
  return Math.max(0, Math.floor(diff/day));
};

//dueDate from registration

export function currentWeek(milisec) {
  const week = 1000 * 60 * 60 * 24 * 7;
  const diff = new Date(dueDate).getTime() - Date.now();
  const totalDays = Math.floor(diff / day);
  return Math.max(0, Math.floor(totalDays / 7));
}
