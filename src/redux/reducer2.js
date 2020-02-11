import {createStore, combineReducers} from 'redux';
import data from './data';
const counter = (state = [], action) => {
  switch (action.type) {
    case 'Hello':
      console.log('Hello World');
      return state;

    default:
      return state;
  }
};

export default counter;
