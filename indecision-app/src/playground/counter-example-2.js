class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count
    };
  }

  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem('count'), 10);
      if (! isNaN(count)) {
        this.setState({count});
      }
    } catch (e) {

    }
  }

  componentDidUpdate() {
    localStorage.setItem('count', this.state.count);
  }

  add() {
    console.log('Add clicked');
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  minus() {
    console.log('Minus clicked');
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  reset() {
    console.log('Reset clicked');
    this.setState((prevState) => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.add}>+1</button>
        <button onClick={this.minus}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter count={10}/>, document.getElementById('app'));
