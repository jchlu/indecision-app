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
var userName = 'Johnny Choudhury-Lucas';
var userAge = 46;
var userLocation = 'Bristol, England';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRo ot)
