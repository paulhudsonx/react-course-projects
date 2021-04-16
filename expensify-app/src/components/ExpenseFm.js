import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    console.log('Expense form +++');
    console.log(props.expense);
    console.log(moment(props.expense.createdAt));
    console.log('Expense form ---');

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    console.log(`Amount [${amount}]`);
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      console.log("OnDateChange +++");
      console.log(createdAt);
      console.log(createdAt.valueOf());
      this.setState(() => ({createdAt}));
      console.log("OnDateChange ---");
    }
  }
  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}));
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: "Please enter and amount and a description."}));
    } else {
      this.setState(() => ({error: ""}));
      console.log("Submitting createAt +++");
      console.log(this.state.createdAt);
      console.log(this.state.createdAt.valueOf());
      console.log("Submitting createAt ---");
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
        Expense Form
      </div>
    )
  }
}

export default ExpenseForm;