import {ADD_TODO,UPDATE_TODO,QUERY_TODO} from './Action';
import {combineReducers} from 'redux';//合并reducers
const initialState = {
  data:[],
	searchContent:''
};
export function todoApp(state = initialState, action) {
  switch (action.type) {
    case QUERY_TODO:
      return Object.assign({}, state, { 
        data: action.data
      });
      case ADD_TODO:
      return Object.assign({}, state, {
        searchContent: action.queryText
      });
      case UPDATE_TODO:
      return Object.assign({}, state, {
        searchContent: action.queryText
      });
    default:
      return state;
  }
}