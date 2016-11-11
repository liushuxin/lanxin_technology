var express = require('express');
var _ = require('lodash');
var componentUrl = require('../../configs/components/index.json');
module.exports = function (router) {
  /** home page is city_dashboard **/
  router.get('/', function (req, resp) {
  	var key = req.query.key;//组件名称

  	var urlItem = _.find(componentUrl,{key:key});
  	console.log(urlItem.msg);
    resp.render(urlItem.template, { page: urlItem.msg});
  });
  
};
