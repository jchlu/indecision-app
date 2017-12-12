// import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'

const template = <p>Testing 123</p>
// const template = React.createElement('p', {}, 'Testing 123')

ReactDOM.render(template, document.getElementById('app'))
// console.log(validator.isEmail('test@gmail.com'))
/*
import geezer, { isAdult, canDrink } from './person'
// With ^^^^ named export, anything can be used as a reference name
console.log(isAdult(17))
console.log(isAdult(19))
console.log(canDrink(17))
console.log(canDrink(29))
console.log(geezer(64))
console.log(geezer(67))
 */
