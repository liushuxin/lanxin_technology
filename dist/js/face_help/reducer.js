import {DECREMENT,INCREMENT,UNDO,REDO} from './actions';
import {combineReducers} from 'redux';
import undoable,{includeAction} from 'redux-undo';
 function counter(state=0,action){//reducer ,接受发起的action,根据action的type 返回新的state ,
	switch(action.type){
		case INCREMENT:
		return state+1;
		case DECREMENT:
		return state -1;
		default:
		return state;
	}
}
const rootReducer = combineReducers({
counter:undoable(counter,{
	filter:includeAction([INCREMENT,DECREMENT]),
	limit:10,
	debug:true,
	undoType:UNDO,
	redoType:REDO
	})
});
export default rootReducer;