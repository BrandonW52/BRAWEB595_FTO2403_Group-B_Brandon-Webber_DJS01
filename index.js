/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const parameters = {
  vel: 10000, // velocity (km/h)
  acc: 3, // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  d: 0, // distance (km)
  fuel: 5000, // remaining fuel (kg)
  fbr: 0.5, // fuel burn rate (kg/s)
};

const d2 = parameters.d + parameters.vel * parameters.time; //calcultes new distance
const rf = parameters.fbr * parameters.time; //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (vel, acc, time) => {
  return vel + acc * time;
};

const vel2 = calcNewVel(parameters.acc, parameters.vel, parameters.time); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
