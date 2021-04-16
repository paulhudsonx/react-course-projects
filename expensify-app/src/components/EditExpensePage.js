import React from 'react';

import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseFm";
import {updateExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
  console.log(props.expense);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
    <h1>Edit Expense</h1>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
      console.log(expense);
      props.dispatch(updateExpense({id: props.expense.id}, expense));
      props.history.push("/");
    }}
    />

    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(`Mapping ${props.match.params.id}`)
  return {
    expense: state.expenses.find((e)=> {
      console.log(`Finding ${e.id}`);
      return e.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
