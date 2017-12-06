import geezer, { isAdult, canDrink } from './person'
// With ^^^^ named export, anything can be used as a reference name
console.log(isAdult(17))
console.log(isAdult(19))
console.log(canDrink(17))
console.log(canDrink(29))
console.log(geezer(64))
console.log(geezer(67))
