import Bar from './bar';
import * as d3 from "d3";
d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function (d) { return d + "px"; });
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