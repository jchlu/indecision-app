/* import React from 'react'
import ReactDOM from 'react-dom'

const appRoot = document.getElementById('app')
 */

class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting () {
    return `Hi. I am ${this.name}!`
  }

  getDescription () {
    return `${this.name} is ${this.age} ${this.age === 1 ? 'year' : 'years'} old`
  }
}

class Traveller extends Person {
  constructor (name, age, homeLocation = false) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting () {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      greeting += ` I'm from ${this.homeLocation}.`
    }

    return greeting
  }
}

const me = new Traveller(undefined, 1)
const newMe = new Traveller('Johnny Choudhury-Lucas', 46, 'Bristol')
console.log(me.getGreeting())
console.log(newMe.getGreeting())
console.log(newMe.getDescription())
