import React from "react";

import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from "../actions/filters";

const ExpenseListFilters = (props) => (
  <div>
    <input
      type='text'
      value={props.filters.text}
      onChange={(event) => {
        console.log(event.target.value);
        props.dispatch(setTextFilter(event.target.value));
      }}/>
    <select
      value={props.filters.sortBy}
      onChange={(event => {
        const sortBy = event.target.value;
        switch (sortBy) {
          case 'date':
            props.dispatch(sortByDate());
            break;
          case 'amount':
            props.dispatch(sortByAmount());
            break;
          default:
            props.dispatch(sortByDate());
            break;
        }
      })}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
