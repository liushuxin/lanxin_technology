 import {ASYNC} from 'redux-amrc';
 export const INCREMENT = "INCREMENT";
 export const DECREMENT = "DECREMENT";
 export const UNDO = "UNDO";
 export const REDO = "REDO";

export  function onIncrement(){
    return {type:INCREMENT};
}
export  function onDecrement(){
    return {type:DECREMENT}
}
export  function onUNDO(){
    return {type:UNDO};
}
export  function onREDO(){
    return {type:REDO}
}
export function success(){
	return {
		[ASYNC]:{
			key:"key",
			promise () => Promise.resolve("success");
		}
	}
}
export function fail(){
	return {
		[ASYNC]:{
			key:"key",
			promise () => Promise.resolve("fail");
		}
	}
}