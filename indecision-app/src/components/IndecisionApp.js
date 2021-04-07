import React from 'react';

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount = () => {

    try {
      console.log('fetching our data');
      const json = localStorage.getItem('options');
      console.log(`Options from storage ${json}`);
      const options = JSON.parse(json);
      if (options) {
        this.setState({options});
      }
    } catch (e) {

    }
  }

  componentDidUpdate = () => {
    console.log('saving data');
    if (this.state.options) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  handleWhatShouldIDo = () => {
    const rndNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rndNum];
    this.setState({selectedOption: option});
  }
  handleHideWhatShouldIDo = () => {
    this.setState({selectedOption: undefined});
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a option value';
    } else if (this.state.options.indexOf(option) != -1) {
      return 'Enter a unique option!';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  handleDeleteOption = (optionToDelete) => {
    console.log(`Deleting ${optionToDelete}`);

    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToDelete !== option)}));

  }

  handleClearOptions = () => {
    this.setState((prevState) => ({options: []}));
  }

  render() {
    const subTitle = "Put your life in the hands of a computer"

    return (
      <div>
        <Header subTitle={subTitle}/>
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handleWhatShouldIDo={this.handleWhatShouldIDo}/>
          <div className="widget">
            <Options options={this.state.options} handleClearOptions={this.handleClearOptions}
                     handleDeleteOption={this.handleDeleteOption}/>
            <AddOption handleAddOption={this.handleAddOption}/>
            <OptionModal
              selectedOption={this.state.selectedOption}
              handleClose={this.handleHideWhatShouldIDo}
            ></OptionModal>
          </div>

        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

