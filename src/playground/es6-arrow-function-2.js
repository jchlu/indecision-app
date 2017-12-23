// arugments object is no longer bound

// ES5:
const add = function (a, b) {
  console.log(arguments) // prints the array, including the 1001
  return a + b
}
console.log(add(55, 1, 1001))

// ES6:
const adding = (a, b) => {
  // console.log(arguments) // Uncaught ReferenceError: arguments is not defined
  return a + b
}
console.log(adding(55, 1, 1001))

// this keyword is no longer bound - meaning ES6 arrow finctions inherit this

const user = {
  name: 'Johnny',
  cities: ['Bristol', 'Swindon', 'Bath'],
  printPlacesWorked5: function (cities) {
    const that = this // cludge!
        this.cities.forEach(function (city) {
      console.log('ES5 ' + that.name + ' has worked in ' + city)
    })
  },
  printPlacesWorked6 () {
    this.cities.forEach((city) => {
      console.log('ES6 ' + this.name + ' has worked in ' + city) // this is available from parent!
    })
  },
  printPlacesWorked6Map () {
    /* const cityMessages = this.cities.map((city) => {
           return 'ES6 Map ' + this.name + ' has worked in ' + city
        })
        return cityMessages */
    return this.cities.map((city) => 'ES6 Map ' + this.name + ' has worked in ' + city)
  }
}

/* user.printPlacesWorked5()
user.printPlacesWorked6()
console.log(user.printPlacesWorked6Map())
 */

// Challenge:

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
