/**
 * TDD Opdracht: Workout Filter - UITWERKING
 */

export function filterByMinReps(workouts, minReps) {
  return workouts.filter(workout => workout.reps >= minReps);
}

export function filterByMaxLoad(workouts, maxLoad) {
  return workouts.filter(workout => workout.load <= maxLoad);
}

export function sortByReps(workouts) {
  return [...workouts].sort((a, b) => a.reps - b.reps);
}

export function getHighIntensityWorkouts(workouts) {
  return workouts.filter(workout => workout.load >= 50);
}
