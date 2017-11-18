console.log('app.js is running')

// JSX - JavaScript XML
var appRoot = document.getElementById('app')

var app = {
    title: 'Indecision App',
    subTitle: 'Some Info on our App',
    options: [
        "One",
        "Two",
    ]
}
var template = (
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
var user = {
    name: 'Johnny Choudhury-Lucas',
    age: 46,
    location: 'Bristol, England',
}
function getLocation(location) {
    // Only render second value if the first value is thruthy
    return location && <p>Location: {location}</p>
    /* equavalent to if (location) {return <p>Location: {location}</p>} or,
        return location ? <p>Location: {location}</p> : undefined */
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {
            (user.age && user.age >= 18) && <p>Age: {user.age}</p>
            // (if both ^ are truthy) - then and only then, do ^
        }
        {getLocation(user.location)}
    </div>
)
ReactDOM.render(template, appRoot)
// ReactDOM.render(templateTwo, appRoot)