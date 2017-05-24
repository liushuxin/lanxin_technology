import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import counter,{Counter} from './reducer.js';
import {createStore} from 'redux';
const store = createStore(counter);
const appEl = document.querySelectorAll('#app')[0];
 function render(){
   ReactDOM.render(<Counter
   value={store.getState()}
   onIncrement={()=>store.dispatch({type:'INCREMENT'})}
   onDecrement = {()=>store.dispatch({type:'DECREMENT'})}
   />,appEl);
   
 }
 render();
 store.subscribe(render);
 store.subscribe(() =>{
	console.log("监听store中state的变化：");
  console.log(store.getState());
});
