// import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import './styles/style.css'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax {
  constructor () {
    this.name = 'Mike'
  }
}

const oldSyntax = new OldSyntax()
console.log(oldSyntax)

class NewSyntax {
  name = "Jen"
  getGreeting = () => {
    return `Hi, my name is ${this.name}.`
  }
}
const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newSyntax)
console.log(newGetGreeting())

