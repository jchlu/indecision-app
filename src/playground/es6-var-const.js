/* Start everything as `const` and only change to `let` if needed - `var` is *never* used */
var nameVar = 'Johnny Choudhury-Lucas'
nameVar = 'J-Dawg'
var nameVar = 'J' // can be completely redeclared with no check on previous existance
console.log('nameVar', nameVar)

let nameLet = 'Zubaida'
// let nameLet = 'Zuby' // Babel - TypeError: src/playgorund/es6-var-const.js: Duplicate declaration "nameLet"
nameLet = 'Zuby'
console.log('nameLet', nameLet)

const nameConst = 'Sausages'
// const nameConst = 'Zuby' // Babel - TypeError: src/playgorund/es6-var-const.js: Duplicate declaration "nameConst"
// nameConst = 'Zuby' // Babel - SyntaxError: src/playgorund/es6-var-const.js: "nameConst" is read-only
console.log('nameConst', nameConst)

/* var, let and const are all function scoped - but let and const are also block scoped */
const fullName = 'Wasif Choudhury'
let firstName // if this was `const` it wouldn't be able to be set inside the block below
if (fullName) {
    // var firstName = fullName.split(' ')[0] // would be available outside the code block (if no let set)
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)