class VisibilityToggle extends React.Component {
  constructor (props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.buttonShowText = 'Show Details'
    this.buttonHideText = 'Hide Details'
    this.title = 'Visibility App'
    this.subTitle = 'Extra details to be show on toggle'
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility () {
    this.setState((previousState) => {
      return {
        visibility: !previousState.visibility
      }
    })
  }

  render () {
    return (
      <div>
        <h1>{this.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility
            ? this.buttonHideText
            : this.buttonShowText}
        </button>
        {this.state.visibility && <div><p>{this.subTitle}</p></div>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
/*
const appRoot = document.getElementById('app')

const app = {
  title: 'Visibility App',
  subTitle: 'Extra details to be show on toggle'
}

const buttonShowText = 'Show Details'
const buttonHideText = 'Hide Details'

let visible = false

const toggle = () => {
  visible = !visible
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggle}>{visible ? buttonHideText : buttonShowText}</button>
      {visible && <div><p>{app.subTitle}</p></div>}
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderApp()
 */
