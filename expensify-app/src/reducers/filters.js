import moment from "moment";

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_START_DATE': {
      return {...state, startDate: action.startDate}
    }
    case 'SET_END_DATE': {
      return {...state, endDate: action.endDate}
    }
    case 'SET_SORT_BY': {
      return {...state, sortBy: action.sortBy}
    }
    case 'UPDATE_TEXT_FILTER': {
      console.log(`Update text filter ${state} with ${action.text}`);
      return {...state, text: action.text}
    }
    default:
      return state;
  }
};

export default filtersReducer;
