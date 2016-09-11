import { combineReducers } from 'redux';
import ExampleReducer from './reducer_example.js';
import TraitifyReducer from './traitify_reducer.js';


/* Example Root Reducer */
const rootReducer = combineReducers({
  example: ExampleReducer,
  traitify: TraitifyReducer
});

export default rootReducer;
