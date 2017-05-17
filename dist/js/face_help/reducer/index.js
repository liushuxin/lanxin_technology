import React,{Component,propTypes} from 'react';
import ReactDOM from 'react-dom';
function counter(state=0,action){
	switch(action.type){
		case "INCREAMENT":
		return state+1;
		case "DECREMENT":
		return state -1;
		default:
		return state;
	}
}
export default class Counter extends Component{

}