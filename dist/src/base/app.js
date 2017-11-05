import Bar from './bar';
var barInst = new Bar();
console.log(barInst.getName());
let allCookie = document.cookie.split(";");
console.log(allCookie);
window.callback_func = function(data){
    console.log("服务器获得的数据为：");
    console.log(data);

}
// var scriptTag = document.createElement('script');
// scriptTag.type = "text/javascript";
// console.log("handle jsonp");
// scriptTag.src= "http://localhost:3000/jsonpdata?callback=callback_func";
// console.log("append jsonp");
// document.body.appendChild(scriptTag);