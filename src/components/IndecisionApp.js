import React from 'react'
// Internal Components
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (optionText) => {
    this.setState((previousState) => {
      return {
        options: previousState.options.filter((option) => {
          return optionText !== option
        })
      }
    })
  }

  handleResetOptions = () => {
    // this.setState(() => ({ options: this.props.options }))
    this.setState(() => ({ options: [] }))
  }

  handleAddOption = (option) => {
    if (this.state.options.indexOf(option) > -1) {
      return 'The option entered already exists'
    } else if (!option) {
      return 'The option entered was not valid'
    }
    this.setState((previousState) => ({
      // this is the short version rather than using return { blah: blahStuff }
      // the curly braces need normal braces around to avoid parser errors
      options: previousState.options.concat([option])
    }))
  }

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    this.setState(() => ({
      selectedOption: option
    }))
  }

  render() {
    const title = 'Indecision App'
    const subTitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header
          title={title}
          subTitle={subTitle}
        />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleResetOptions={this.handleResetOptions}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
            <OptionModal
              selectedOption={this.state.selectedOption}
            />
          </div>
        </div>
      </div>
    )
  }

  /* Read options back from local storage on page reload */
  componentDidMount() {
    try {
      // console.log('componentDidMount')
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      // Do nothing - fall back to default
    }
  }

  /*
    Takes two parameters, referring to previous props & state
    We want state - to write the options to local storage
  */
  componentDidUpdate(previousProps, previousState) {
    // console.log('componentDidUpdate')
    if (previousState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

} // End of IndecisionApp class definition
