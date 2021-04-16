import {createStore, combineReducers} from "redux";

import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const configureStore = () => {
  return createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
};

export default configureStore;
