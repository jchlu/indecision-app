
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
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.options.map((option) => {
            return <p key={option}>{option}</p>
          })
        }
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return <div>Single Option Component</div>
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>AddOption Component Here</div>
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
