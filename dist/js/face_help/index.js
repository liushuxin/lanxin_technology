import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect,Provider} from 'react-redux';
import counter from './reducer.js';
import Counter from './Counter';
import * as ActionCreators from './actions';
const store = createStore(counter);
const appEl = document.querySelectorAll('#app')[0];
store.subscribe(() =>{
	console.log("监听store中state的变化：");
  console.log(store.getState());
}
);
   ReactDOM.render(<Provider store={store}>
      <Counter/>
   </Provider>
   ,appEl);
   

