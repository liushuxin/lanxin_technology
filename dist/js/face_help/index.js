import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,compose,applyMiddleware} from 'redux';
import {asyncMiddleware} from 'redux-amrc';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import thunk from 'redux-thunk';
import {connect,Provider} from 'react-redux';
import counter from './reducer.js';
import getRouters from './routers';
import * as ActionCreators from './actions';
const store = createStore(counter,compose(
  applyMiddleware(thunk,asyncMiddleware),
  window.devToolsExtension?window.devToolsExtension():f => f
));
const routers = getRouters();
const appEl = document.querySelectorAll('#app')[0];
   ReactDOM.render(<Provider store={store}>
     <Router >
     {routers}
     </Router>
      
   </Provider>
   ,appEl);

   
   

