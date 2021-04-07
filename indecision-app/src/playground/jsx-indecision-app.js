console.log("App.js is running");

const app = {
    title: 'This is JSX from counterExample.js',
    subTitle: 'Hello',
    options: ['One', 'Two']
};

const onFormSubmit = (event) => {
    console.log("Submit pressed");
    event.preventDefault();

    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';

        renderApp();
    }
};

const onClearOptions = (event) => {
    //event.preventDefault();
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
  const rndNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[rndNum];
  alert(option);
  console.log(rndNum);
};

const showItems = () => {
    let itemNo = 0;
    return app.options.map((option) => {
        itemNo++;
        return <li key={itemNo}>{option}</li>;
    });

}

const renderApp = () => {

// JSX - JavaScript XML
    let itemNo = 0;
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} id="rnd-id" className="button" onClick={onMakeDecision}>What should I do?</button>
            <button id="reset-id" className="button" onClick={onClearOptions}>Clear Options</button>
            <ol>
                {
                    app.options.map((option) => <li key={itemNo++}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

//var template = React.createElement("h1", null, "Hello This is JSX from counterExample.js");
const appRoot = document.getElementById("app");

renderApp();
