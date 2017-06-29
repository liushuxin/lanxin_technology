import React,{Component,propTypes} from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/dataTables/index';
//redux 相关包
import {Provider} from 'react-redux';
import {createStore,compose,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { todoApp } from '../../components/dataTables/reducer';
let store = createStore(todoApp,compose(
  applyMiddleware(thunk,createLogger()),
  window.devToolsExtension ? window.devToolsExtension():f => f
));
// console.log("init"); 
// console.log(store.getState()); 
// store.subscribe(() =>{
// 	console.log("监听store中state的变化：");
//   console.log(store.getState());
// });


 ReactDOM.render(<Provider store={store}>  
 <App config={{backend:'/components/getData'}}/>
  </Provider>,
 document.getElementById('app') );
