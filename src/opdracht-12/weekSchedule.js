/**
 * TDD Opdracht: Weekly Workout Schedule
 * 
 * Plan workouts voor de hele week
 * Run: npm test opdracht-12
 */

/**
 * Maakt een leeg week schema aan
 * Return: { monday: [], tuesday: [], ..., sunday: [] }
 */
export function createWeekSchedule() {
  // TODO: Return object met 7 dagen, elk met lege array
  // Hint: 
  // return {
  //   monday: [],
  //   tuesday: [],
  //   ...
  // };
}

/**
 * Voegt workout toe aan specifieke dag
 */
export function addWorkoutToDay(schedule, day, workout) {
  // TODO: Voeg workout toe aan schedule[day] array
  // Hint: schedule[day].push(workout)
}

/**
 * Geeft alle workouts voor een specifieke dag
 */
export function getWorkoutsForDay(schedule, day) {
  // TODO: Return de workouts array voor die dag
}

/**
 * Telt totaal aantal reps voor hele week
 */
export function getTotalRepsForWeek(schedule) {
  // TODO:
  // 1. Loop door alle dagen
  // 2. Voor elke dag, loop door workouts
  // 3. Tel alle reps op
  // Hint: Object.values(schedule) geeft alle arrays
}

/**
 * Check of er minimaal 1 rustdag is (dag zonder workouts)
 */
export function hasRestDay(schedule) {
  // TODO: 
  // Check of er minimaal 1 dag is met lege array
  // Hint: Object.values(schedule).some(workouts => workouts.length === 0)
}
