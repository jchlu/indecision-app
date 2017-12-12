class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.addOne = this.addOne.bind(this)
    this.subtractOne = this.subtractOne.bind(this)
    this.resetCount = this.resetCount.bind(this)
    this.state = {
      count: 0
    }
  }
  /**
   * Update count with value from localStorage,
   * converting to a numeric and checking for NaN
   */
  componentDidMount () {
    try {
      const count = parseInt(localStorage.getItem('count'), 10)
      if (!isNaN(count)) {
        this.setState(() => ({count}))
      }
    } catch (error) {
      // Do nothing
    }
  }
  /**
   * Check if the previous value is different and update
   * localStorage so count persists through page reloads
   * @param {array} previousProps
   * @param {array} previousState
   */
  componentDidUpdate (previousProps, previousState) {
    if (previousState.count !== this.state.count) {
      console.log('Updated localStorage count value')
      localStorage.setItem('count', JSON.stringify(this.state.count))
    }
  }

  addOne () {
    // Passing setState a function is the preferred way now & in the future.
    // The "old way" of passing in the changes causes asyncronous bugs and
    // will likely be deprecated in future versions
    this.setState((previousState) => ({count: previousState.count + 1}))
  }

  subtractOne () {
    this.setState((previousState) => ({ count: previousState.count - 1 }))
  }

  resetCount () {
    this.setState(() => ({count: 0}))
  }

  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.subtractOne}> -1</button>
        <button onClick={this.resetCount} type='reset'>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

/* Previous WIP below here */
/*
const addOne = () => {
count++
console.log('addOne clicked', count)
renderCountApp()
}

const subtractOne = () => {
count--
console.log('subtractOne clicked', count)
renderCountApp()
}

const resetCount = () => {
count = 0;
console.log('reset clicked')
renderCountApp()
}

let count = 0

const renderCountApp = () => {
const templateThree = (
<div>
<h1>Count: {count}</h1>
<button onClick={addOne}>+1</button>
<button onClick={subtractOne}>-1</button>
<button type="reset" onClick={resetCount}>reset</button>
</div>
)
ReactDOM.render(templateThree, appRoot)
}

renderCountApp()

const template = (
<div>
<h1>{app.title}</h1>
{ app.subTitle && <p>{app.subTitle}</p> }
<p> { app.options && app.options.length > 0 ? 'Here are your options' : 'No Options' } </p>
<ol>
<li>Item One</li>
<li>Item Two</li>
</ol>
</div>
)

const user = {
name: 'Johnny Choudhury-Lucas',
age: 46,
location: 'Bristol, England',
}

function getLocation(location) {
// Only render second value if the first value is thruthy
return location && <p>Location: {location}</p>
// equavalent to if (location) {return <p>Location: {location}</p>} or,
// return location ? <p>Location: {location}</p> : undefined
}

const templateTwo = (
<div>
<h1>{user.name ? user.name : 'Anonymous'}</h1>
{
(user.age && user.age >= 18) && <p>Age: {user.age}</p>
// (if both ^ are truthy) - then and only then, do ^
}
{getLocation(user.location)}
</div>
)

// ReactDOM.render(template, appRoot)
// ReactDOM.render(templateTwo, appRoot)
*/
