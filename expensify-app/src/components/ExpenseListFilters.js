import React from "react";

import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters";
import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChanged = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={(event) => {
            console.log(event.target.value);
            this.props.dispatch(setTextFilter(event.target.value));
          }}/>
        <select
          value={this.props.filters.sortBy}
          onChange={(event => {
            const sortBy = event.target.value;
            switch (sortBy) {
              case 'date':
                this.props.dispatch(sortByDate());
                break;
              case 'amount':
                this.props.dispatch(sortByAmount());
                break;
              default:
                this.props.dispatch(sortByDate());
                break;
            }
          })}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onFocusChanged}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={()=>false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
