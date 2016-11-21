import React,{Component,propTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../components/reducer';
import $ from 'jquery';
import App from '../../components/App'; 
import IndexSass from '../../sass/index.scss'; 
const store=createStore(reducer); 
 console.log(store.getState()); 
 ReactDOM.render(<Provider store={store}>  
 <App/>
  </Provider>,
 document.getElementById('app') );
