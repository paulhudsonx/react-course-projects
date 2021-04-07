console.log("App.js is running");

const app = {
    title: 'Visibility Toggle',
    subTitle: ''
};

let visible = true;

const toggleVisibility = () => {
    visible = !visible;
    render();
};

const render = () => {

// JSX - JavaScript XML
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}

            <button id="visibility-button-id" className="button"
                    onClick={toggleVisibility}>{visible ? 'Hide details' : 'Show details'}</button>
            {visible && (<div><p>Here are the details</p></div>)}

        </div>
    );

    ReactDOM.render(jsx, appRoot);
};

//var template = React.createElement("h1", null, "Hello This is JSX from counterExample.js");
const appRoot = document.getElementById("app");

render();
