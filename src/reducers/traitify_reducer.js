import { GET_USER_TRAITIFY } from '../actions/traitify_actions.js';
import _ from 'lodash';


export default function(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_USER_TRAITIFY:
      newState = action.traitifyObj;
      return newState;
    default:
      return state;
  }
}