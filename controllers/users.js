var express = require('express');

/* GET users listing. */
module.exports = function(router){
  router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
}
