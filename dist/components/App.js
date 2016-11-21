import React from 'react'; 
import {connect} from 'react-redux'; 
import {addOne,delOne} from './actions'; 
import $ from 'jquery';
class App extends React.Component{ 
  componentDidMount(){
    let self = this;
      $.ajax({
             type: "get",
             async: false,
             url: "http://localhost:8413/lodash/getChartData",
             dataType: "jsonp",
             jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
             jsonpCallback:"getData",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
             success: function(json){
                console.log(json);
             },
             error: function(){
                 alert('fail');
             }
         });
   

  }
  render(){ 
    return ( 
      <div> 
      <input type="button" onClick={this.props.onAdd} value="addOneItem"/><br/> 
      length:<b>{this.props.length}</b>;datas:<i>{this.props.value}</i><br/> 
      <input type="button" onClick={this.props.onDel} value="delFirst"/>
      样式修改：
      <div id="main"></div>
      <div className="box1"></div>
      <div className="box2"></div>
      <div class="three-column">
      <div>
      第一段，第一段
      </div>
      <div>
      第二段，
      </div>
      <div>
      第三段
      </div>



      </div>
       </div> ); 
      }
   
  } 
  function mapStateToProps(state){ 
    return { 
      value:JSON.stringify(state.datas), length:state.length 
    } 
  } 
  function mapDispatchToProps(dispatch){ 
    return { 
      onAdd:()=>{ let data={id:Math.round(Math.random()*10),text:Math.round(Math.random()*1000000000).toString(16)}; dispatch(addOne(data)); 
      }, 
      onDel:()=>{ dispatch(delOne(0)); } 
    } 
} 
 export default connect(mapStateToProps,mapDispatchToProps)(App);
