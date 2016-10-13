var express = require('express');
module.exports = function (router) {
  /** home page is city_dashboard **/
  router.get('/', function (req, resp) {
    resp.render('index', { title: '主页-兰新科技' });
  });
};
