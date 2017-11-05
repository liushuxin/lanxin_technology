var express = require('express');
var debug = require('debug')("lanxin:login");

/* GET users listing. */
module.exports = function(router){
    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
    });
    router.get('/', function(req, res, next) {
        console.log(req.session);
        debug(req.session);

        res.render('login/index', { title: '登录-兰新科技' });
    });
    //校验用户名密码
    router.post('/validateUser',function(req,res,next) {
       var  username = req.body.username;
       var password = req.body.password;
       console.log(req.session);
       req.session.username = username;
       res.send({
           code:0,
           msg:"登录成功"
       });
    

    });
}
