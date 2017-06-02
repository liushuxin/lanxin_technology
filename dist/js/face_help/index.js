import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect,Provider} from 'react-redux';
import counter from './reducer.js';
import Counter from './Counter';
import * as ActionCreators from './actions';
const store = createStore(counter,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f => f
));
const appEl = document.querySelectorAll('#app')[0];
   ReactDOM.render(<Provider store={store}>
      <Counter/>
   </Provider>
   ,appEl);
   

