
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

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick () {
    alert('handlePick method called')
  }
  render () {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor (props) {
    super(props)
    this.removeAllOptions = this.removeAllOptions.bind(this)
  }

  removeAllOptions () {
    console.log(this.props.options)
    // alert('Remove all options button has been pressed')
  }
  render () {
    return (
      <div>
        <button onClick={this.removeAllOptions}>Remove All </button>
        {
          this.props.options.map((option) => {
            return <Option key={option} optionText={option} />
          })
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <p>{this.props.optionText}</p>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert(`The option: ${option} was added.`)
      // app.options.push(option)
      // e.target.elements.option.value = ''
    }
    // renderApp()
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>

      </div>
    )
  }
}

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
