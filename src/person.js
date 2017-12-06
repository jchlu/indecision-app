const isAdult = (age) => age >= 18

const canDrink = (age) => age >= 21

const isSenior = (age) => {
  // Long way just for variation
  return age >= 65
}

export { isAdult, canDrink, isSenior as default }

/**
 * This could just as well be written thus:
 * @param {integer} age
 */
/*
 export const isAdult = (age) => age >= 18

export const canDrink = (age) => age >= 21

export default (age) => {
  // Long way just for variation
  return age >= 65
}

// or:

export default (age) => age >= 65

*/
