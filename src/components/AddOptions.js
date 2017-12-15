import React from 'react'

export default class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => {
      return { error }
      // shorthand for  error: error
    })
    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render () {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>

      </div>
    )
  }
} // End of AddOption class definition
