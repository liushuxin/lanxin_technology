var express = require('express');
var _ = require('lodash');
var componentUrl = require('../../configs/components/index.json');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');
/*===连接数据库 start==*/
// Connection URL
var url = 'mongodb://localhost:27017/lanxin';

/*===连接数据库 end==*/
module.exports = function (router) {
  /** home page is city_dashboard **/
  router.get('/', function (req, resp) {
  	var key = req.query.key;//组件名称
  if(key){
    //跳转到某一个组件，
    var urlItem = _.find(componentUrl,{key:key});
    resp.render(urlItem.template, { page: urlItem.msg});
  }else{
    //直接跳转到组件中心
    resp.render("component_center/index.ejs", { 
      page: {title:"组件中心"},
      componentUrl:componentUrl
    });
  }
  	

  });
  //
   router.get('/getData', function (req, resp) {
  	var key = req.query.name;//组件名称
  	var insertDocuments = function(db,key, callback) {
  		var collection = db.collection('lanxin');
      var query = {};
      if(key){
        query = {name:key};
      }
    collection.find(query).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
 

	}
  	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	  insertDocuments(db, key,function(result) {
	  	console.log(result);
	    db.close();
	    resp.send(result);
	  });
	  
		});
  });
///更新
router.get('/updateData',function(req,resp){
	

	var updateUser = function(db, callback) {
    db.collection('lanxin').update(
      { "name" : "gongpengfei" },
      {
        $set: { "age": "22" },
        $currentDate: { "lastModified": true }
      }, function(err, results) {
      console.log(results);
      callback();
    });
  };

  MongoClient.connect(url, function(err, db) {
  	  assert.equal(null, err);

  	  updateUser(db, function() {
  	  	 resp.send("更新成功");
  	      db.close();
  	  });
  });
});
///新增
router.get('/addData',function(req,resp){
  

  var addUser = function(db, callback) {
    db.collection('lanxin').insert(
      {"name" : "xiaohong",
       "age": "22" ,
       "lastModified": new Date()
      }, function(err, results) {
      console.log(results);
      callback();
    });
  };

  MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);

      addUser(db, function() {
         resp.send("新增成功");
          db.close();
      });
  });
});


  
};
