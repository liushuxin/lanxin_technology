var express = require('express');
module.exports = function (router) {
  /** home page is city_dashboard **/
  router.post('/', function (req, resp) {
      console.log(req);
      var params = {
          firstName:"asd",
          lastName:"dfg",
          arr:[1,2,3,4,5,6,7,8,9,0],
          children:{
            firstName:"asd",
            lastName:"dfg",
            children:{
                firstName:"asd",
                lastName:"dfg"  
            }
          }
      }
      console.log(params);
      console.log(JSON.stringify(params));
      console.log(JSON.stringify(params,null,2));
      setTimeout(()=>{
        resp.send(params);
      },200)
    
  });
};
