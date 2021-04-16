import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import selectExpenses from "./selectors/expenses";

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Virgin Media', amount: 109500}));

const state = store.getState();
const visibleExpenses = selectExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

/*
setTimeout(()=> {
  store.dispatch(setTextFilter('gas'));
}, 3000);
*/
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));



