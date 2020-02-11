import {createStore, combineReducers} from 'redux';
import reducer1 from './redux/reducer1';
import reducer2 from './redux/reducer2';
export default createStore(
  combineReducers({
    countera: reducer1,
    counterb: reducer2,
  }),
);
