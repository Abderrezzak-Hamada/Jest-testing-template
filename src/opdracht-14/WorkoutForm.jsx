/**
 * TDD Opdracht: WorkoutForm Component
 * 
 * Een form om nieuwe workouts toe te voegen
 * Run: npm test opdracht-14
 */

import { useState } from 'react';

function WorkoutForm({ onSubmit }) {
  // TODO: Maak state voor title, reps, load

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Validatie - check of title niet leeg is
    // Als title leeg: setError('Title is required') en stop
    
    // TODO: Maak workout object met:
    // - title (string)
    // - reps (convert naar number met Number() of parseInt())
    // - load (convert naar number)
    
    // TODO: Roep onSubmit aan met workout object
    
    // TODO: Reset form (setTitle(''), setReps(''), setLoad(''))
    // TODO: Clear error (setError(''))
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Title input */}
      {/* <input 
        type="text"
        placeholder="Exercise title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}

      {/* TODO: Reps input (type="number") */}
      
      {/* TODO: Load input (type="number") */}
      
      {/* TODO: Submit button */}
      {/* <button type="submit">Add Workout</button> */}
      
      {/* TODO: Toon error als die er is */}
      {/* {error && <p>{error}</p>} */}
    </form>
  );
}

export default WorkoutForm;
