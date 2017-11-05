'use strict';

console.log('app.js is running');

// JSX - JavaScript XML
var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision App',
    subTitle: 'Some Info on our App'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var user = {
    name: 'Johnny Choudhury-Lucas',
    age: 46,
    location: 'Bristol, England'
};
function getLocation(location) {
    // Only render second value if the first value is thruthy
    return location && React.createElement(
        'p',
        null,
        'Location: ',
        location
    );
    /* equavalent to if (location) {return <p>Location: {location}</p>} or,
        return location ? <p>Location: {location}</p> : undefined */
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    )
    // (if both ^ are truthy) - then and only then, do ^
    ,
    getLocation(user.location)
);
// ReactDOM.render(template, appRoot)
ReactDOM.render(templateTwo, appRoot);
