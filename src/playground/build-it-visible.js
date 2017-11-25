import React from 'react'
import ReactDOM from 'react-dom'

const appRoot = document.getElementById('app')

const app = {
  title: 'Visibility App',
  subTitle: 'Extra details to be show on toggle',
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
