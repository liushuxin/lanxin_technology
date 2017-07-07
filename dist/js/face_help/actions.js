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
			key:"counter",
			promise :() => fetch('/getData').then(res => {
				console.log(res);
				if(!res.ok){
					throw new Error(res.statusText);
				}
				return res.json();

			})
		}
	}
}
export function fail(){
	return {
		[ASYNC]:{
			key:"key1",
			promise :() => Promise.resolve("fail")
		}
	}
}