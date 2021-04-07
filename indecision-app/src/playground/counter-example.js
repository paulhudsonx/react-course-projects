console.log("App.js is running");

const counterExample = {
    title: 'This is JSX from counterExample.js',
    subTitle: 'Hello',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{counterExample.title}</h1>
        {counterExample.subTitle && <p>{counterExample.subTitle}</p>}
        <p>{counterExample.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count += 1;
    console.log(count);
    renderCounter();
};
const minusOne = () => {
    count -= 1;
    console.log(count);
    renderCounter();
};

const reset = () => {
    count = 0;
    console.log(count);
    renderCounter();
}
//var template = React.createElement("h1", null, "Hello This is JSX from counterExample.js");
const appRoot = document.getElementById("counterExample");

const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="add-one-id" className="button" onClick={addOne}>+1</button>
            <button id="minus-one-id" className="button" onClick={minusOne}>-1</button>
            <button id="reset-id-id" className="button" onClick={reset}>Reset</button>
        </div>
    );
console.log(templateTwo);
    ReactDOM.render(templateTwo, appRoot);
}

renderCounter();
