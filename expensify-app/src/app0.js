console.log("App.js is running");

const app = {
    title: 'This is JSX from counterExample.js',
    subTitle: 'Hello',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'Paul Hudson',
    age: '56',
    location: 'New York'
};

function getLocation(location) {
    if (location) {
        return         <p>Location: {location}</p>;
    }  else {
        return undefined;
    }
}

const template2 = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);
//var template = React.createElement("h1", null, "Hello This is JSX from counterExample.js");
const appRoot = document.getElementById("counterExample");

ReactDOM.render(template, appRoot);
