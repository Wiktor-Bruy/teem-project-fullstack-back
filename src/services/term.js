export function daysLeft(milisec) {
  const day = 1000 * 60 * 60 * 24;
const diff = milisec - Date.now();
  return Math.max(0, Math.floor(diff / day));
}

export function currentWeek(milisec) {
  const totalPregnancyDays = 39 * 7;
  const day = 1000 * 60 * 60 * 24;
  const diff = milisec - Date.now();
  const daysLeftValue = Math.max(0, Math.floor(diff / day));
  const daysPassed = totalPregnancyDays - daysLeftValue;
  const week = Math.floor(daysPassed/7);
  return Math.min(39, Math.max(1, week));
}
