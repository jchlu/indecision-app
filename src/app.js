class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.deleteAllOptions = this.deleteAllOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: ['Option 1', 'Option 2', 'Option 4']
      // options: []
    }
  }
  render () {
    const title = 'Indecision'
    const subTitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header
          title={title}
          subTitle={subTitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          deleteAllOptions={this.deleteAllOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }

  deleteAllOptions () {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handleAddOption (option) {
    console.log(option)
    if (this.state.options.indexOf(option) > -1) {
      return 'The option entered already exists'
    } else if (!option) {
      return 'The option entered was not valid'
    }
    this.setState((previousState) => {
      return {
        options: previousState.options.concat([option])
      }
    })
  }

  handlePick () {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    console.log(option)
  }
} // End of IndecisionApp class definition

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
} // End of Header class definition

class Action extends React.Component {
  render () {
    return (
      <div>
        {/* {this.props.hasOptions && <button onClick={this.handlePick}>What should I do?</button>} */}
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I do?
        </button>
      </div>
    )
  }
} // End of Action class definition

class Options extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.deleteAllOptions}>Remove All </button>
        {
          this.props.options.length > 0 &&
          this.props.options.map((option) => {
            return <Option key={option} optionText={option} />
          })
        }
      </div>
    )
  }
} // End of Options class definition

class Option extends React.Component {
  render () {
    return (
      <p>{this.props.optionText}</p>
    )
  }
} // End of Option class definition

class AddOption extends React.Component {
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
    e.target.elements.option.value = ''
    this.setState(() => {
      return {
        error // shorthand for  error: error
      }
    })
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

/* const app = (
  <div>
  <h1>Title</h1>
  <Header />
  <Action />
  <Options />
  <AddOption />
  </div>
)
ReactDOM.render(app, document.getElementById('app'))
 */

// Pre "Componentising"
/*
class IndecisionApp extends React.Component {
  render () {
    const title = 'Indecision'
    const subTitle = 'Put your life in the hands of a computer'
    const options = ['Option 1', 'Option 2', 'Option 4']
    return (
      <div>
        <Header
          title={title}
          subTitle={subTitle}
        />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}
*/
