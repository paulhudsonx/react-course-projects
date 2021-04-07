class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearOptions = this.handleClearOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleWhatShouldIDo = this.handleWhatShouldIDo.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount() {

    try {
      console.log('fetching data');
      const json = localStorage.getItem('options');
      console.log(`Options from storage ${json}`);
      const options = JSON.parse(json);
      if (options) {
        this.setState({ options });
      }
    } catch (e) {

    }
  }

  componentDidUpdate() {
    console.log('saving data');
    if (this.state.options) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleWhatShouldIDo() {
    const rndNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rndNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a option value';
    } else if (this.state.options.indexOf(option) != -1) {
      return 'Enter a unique option!';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  handleDeleteOption(optionToDelete) {
    console.log(`Deleting ${optionToDelete}`);

    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToDelete !== option)}));

  }

  handleClearOptions() {
    this.setState((prevState) => ({options: []}));
  }

  render() {
    const subTitle = "Put your life in the hands of a computer"

    return (
      <div>
        <Header subTitle={subTitle}/>
        <Action hasOptions={this.state.options.length > 0} handleWhatShouldIDo={this.handleWhatShouldIDo}/>
        <Options options={this.state.options} handleClearOptions={this.handleClearOptions}
                 handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handleWhatShouldIDo}>What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  console.log(props.options);
  return (
    <div>
      <button disabled={props.options.length == 0} onClick={props.handleClearOptions}>Remove all
      </button>
      <p>Options length: {props.options.length}</p>
      {props.options.length == 0 && <p>Enter an option to get started</p>}
      <ol>
        {props.options.map((option) => <Option key={option} text={option}
                                               handleDeleteOption={props.handleDeleteOption}/>)}
      </ol>
    </div>
  );
}

const Option = (props) => {
  return (
    <li>{props.text}
      <button onClick={(e) => {
        props.handleDeleteOption(props.text);
      }}>Delete
      </button>
    </li>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    let error = this.props.handleAddOption(option);
    this.setState(() => ({error}));

    if (! error) {
      event.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>

    );
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

ReactDOM.render(<IndecisionApp options={['Opt 1', 'Opt 2']}/>, document.getElementById('app'));
