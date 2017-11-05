console.log('app.js is running')

// JSX - JavaScript XML
var appRoot = document.getElementById('app')

var app = {
    title: 'Indecision App',
    subTitle: 'Some Info on our App'
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
    </div>
)
var user = {
    name: 'Johnny Choudhury-Lucas',
    age: 46,
    location: 'Bristol, England'
}
var userName = 'Johnny Choudhury-Lucas'
var userAge = 46
var userLocation = 'Bristol, England'
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)
ReactDOM.render(template, appRoot)
// ReactDOM.render(templateTwo, appRo ot)