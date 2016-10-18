var express = require('express');
module.exports = function (router) {
  /** home page is city_dashboard **/
  router.get('/', function (req, resp) {
    resp.render('user_info/index', { title: '主页-兰新科技' });
  });
};
