class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handleResetOptions = this.handleResetOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: []
    }
  }
  render () {
    const title = 'Indecision App'
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
          handleResetOptions={this.handleResetOptions}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }

  /* Read options back from local storage on page reload */
  componentDidMount () {
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
  componentDidUpdate (previousProps, previousState) {
    // console.log('componentDidUpdate')
    if (previousState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleDeleteOptions () {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption (optionText) {
    this.setState((previousState) => {
      return {
        options: previousState.options.filter((option) => {
          return optionText !== option
        })}
    })
  }

  handleResetOptions () {
    this.setState(() => ({ options: this.props.options }))
  }

  handleAddOption (option) {
    console.log(option)
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

  handlePick () {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    console.log(option)
  }
} // End of IndecisionApp class definition
/*
// Irrelevent now we use localStorage for passing in data
IndecisionApp.defaultProps = {
  options: []
}
 */
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}
// End of Header stateless functional component definition

const Action = (props) => {
  return (
    <div>
      {/* {this.props.hasOptions && <button onClick={this.handlePick}>What should I do?</button>} */}
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
          What should I do?
      </button>
    </div>
  )
} // End of Action stateless functional component definition

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <button onClick={props.handleResetOptions}>Reset to Default</button>
      {
        props.options.length > 0 &&
          props.options.map((option) => {
            return (
              <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
              />
            )
          })
      }
    </div>
  )
} // End of Options stateless functional component definition

const Option = (props) => {
  return (
    <p>
      {props.optionText}
      <button onClick={(e) => {
        // Rather than passing the whole event, just pass the option text
        props.handleDeleteOption(props.optionText)
      }}>remove</button>
    </p>
  )
} // End of Option stateless functional component definition

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
// ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2', 'Option 4']} />, document.getElementById('app'))

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
