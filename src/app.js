console.log('app.js is running')

// JSX - JavaScript XML
const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subTitle: 'Some Info on our App',
    options: [],
}

const formOnSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    renderApp()
}

const resetOptions = () => {
    if (app.options.length > 0) {
        app.options = []
        renderApp()
    }
}

function renderOptionsListItems() {
    return app.options.map((option) => {
        <li>{ option }</li>
    })
}

const makeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNumber]
    alert(option)
}

const renderApp = () => {
    const template = (
            <div>
            <h1>{app.title}</h1>
            { app.subTitle && <p>{app.subTitle}</p> }
            <p> { app.options && app.options.length > 0 ? 'Here are your options' : 'No Options' } </p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={resetOptions}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{ option }</li> )}
            </ol>
            <form onSubmit={formOnSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()