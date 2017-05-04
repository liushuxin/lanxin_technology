var express = require('express');
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './App';
module.exports = function (router) {
  router.get('/', function (req, resp) {
    renderReactString();
    
    resp.render('test/index', { title: '主页-兰新科技' });
  });
  function renderReactString(){
    const appHTML = renderToString(<App/>);
    console.log(appHTML);
    return appHTML
    
  }
};