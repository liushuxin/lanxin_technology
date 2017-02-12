var express = require('express');
var mysql = require('mysql');
module.exports = function (router) {
  /** home page is city_dashboard **/
  router.get('/', function (req, resp) {
    resp.render('index', { title: '主页-兰新科技' });
  });
  router.get('/insertUser', function (req, resp) {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'lanxin11',
      database : 'lanxin'
    });
 
connection.connect();
 
connection.query('INSERT INTO lanxin_user VALUES("12345","gongpengfei") ', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});
 
connection.end();
  });

};
