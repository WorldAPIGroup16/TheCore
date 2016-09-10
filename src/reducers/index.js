import { combineReducers } from 'redux';
import ExampleReducer from './reducer_example.js';

/* Example Root Reducer */
const rootReducer = combineReducers({
  example: ExampleReducer
});

export default rootReducer;
