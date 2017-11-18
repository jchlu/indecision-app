function square(x) {
    return x * x
}

const squareAnon = function(x) {
    return x * x
}

/*
// Verbose definition of an arrow function 
const squareArrow = (x) => {
    return x * x
}
*/

const squareArrow = (x) => x * x

/* console.log(square(8))
console.log(squareAnon(3))
console.log(squareArrow(9))
 */

 // Challenge:

 const firstName = (fullName) => {
     return fullName.split(' ')[0]
 }

 const firstNameShortSyntax = (fullName) => fullName.split(' ')[0]

 console.log(firstName('Mike Smith'))
 console.log(firstNameShortSyntax('John Smith'))