export function daysLeft(dateString) {
  const day = 1000 * 60 * 60 * 24;
  const diff = new Date(dateString).getTime() - Date.now();
  return Math.max(0, Math.floor(diff / day));
}

export function getCurrentWeek(dateString) {
  const totalPregnancyDays = 39 * 7;
  const day = 1000 * 60 * 60 * 24;
  const diff = new Date(dateString).getTime() - Date.now();
  const daysLeftValue = Math.max(0, Math.floor(diff / day));
  const daysPassed = totalPregnancyDays - daysLeftValue;
  const week = Math.floor(daysPassed / 7);
  return Math.min(39, Math.max(1, week));
}
