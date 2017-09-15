var express = require('express');
var mysql = require('mysql');
var axios =require('axios');
module.exports = function (router) {
  /** home page is city_dashboard **/
  router.get('/', function (req, resp) {
    axios.get('http://www.weather.com.cn/data/cityinfo/101010100.html')
    .then(function(response){
      //console.log(response);
      return response.data;
    })
    .then(function(data){
      resp.render('index', { title: '主页-兰新科技',msg:data });

    })
    .catch(function(err){
      console.log(err);
    });
    
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
router.get('/queryUser', function (req, resp) {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'lanxin11',
      database : 'lanxin'
    });
 
    connection.connect();
 
    connection.query('SELECT * FROM lanxin_user WHERE 1=1', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      resp.render('index', 
        { title: "组件中心",
        msg:JSON.stringify(results[0])});
    });
 
  connection.end();
  });

router.get("/getData",function(req,res){
  console.log(req.body);
  var data = {
    liu:"1",
    shu:"2",
    xin:"3"
  }
  setTimeout(function(){
    res.json(JSON.stringify(data));
  },2000);
  

});
//吃饭帮，
router.get("/initFaceHelp",function(req,res){
  res.render('common', { 
    title: '吃饭帮',
    js:"/javascripts/face_help/index.js" 
  });



  

});


};
