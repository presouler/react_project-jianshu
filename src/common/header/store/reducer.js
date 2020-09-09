import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'
const defaultState =fromJS({
  focused : false,
})


export default (state = defaultState,action)=>{
  if(action.type===actionTypes.SEARCH_FOCUS){
    const newState = state.set("focused", true);
    return newState
  }
  if(action.type===actionTypes.SEARCH_BlUR){
    const newState = state.set("focused", false);
    return newState
  }
  return state
}
