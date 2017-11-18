console.log('app.js is running')

// JSX - JavaScript XML
const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subTitle: 'Some Info on our App',
    options: [
        "One",
        "Two",
    ]
};

const addOne = () => {
    count++;
    console.log('addOne clicked', count);
    renderCountApp();
};

const subtractOne = () => {
    count--;
    console.log('subtractOne clicked', count);
    renderCountApp();
};

const resetCount = () => {
    count = 0; 
    console.log('reset clicked');
    renderCountApp();
};

let count = 0;

const renderCountApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button type="reset" onClick={resetCount}>reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot)
}

renderCountApp();




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
    /* equavalent to if (location) {return <p>Location: {location}</p>} or,
        return location ? <p>Location: {location}</p> : undefined */
};
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