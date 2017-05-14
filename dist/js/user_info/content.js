import React,{Component,PropTypes} from 'react';
import _ from 'lodash';
 var CommonVar = "全局变量测试数据";
export default class Content extends Component{
constructor(props){
  super(props);
  this.state = {
  	value:0
  }
}
handle(){
  console.log("handle this:");
  console.log(this);
  this.happy();
}
happy(){
  console.log("happy this:");
  console.log(this);
}
componentDidMount(){
  let testDom = <h1>主标题</h1>;
  console.log("componentDidMount this:");
  console.log(this);
  this.handle();
  // console.log("react element:");
  // console.log(testDom);


}
render(){
  let self = this;
  console.log(<Contents value={self.state.value}></Contents>);
  return <div>
  <button className="btn btn-success" onClick={()=>{self.setState({value:self.state.value+1})}}>增加</button>
   <Contents value={self.state.value}></Contents>
    <button className="btn btn-success" onClick={self.handle()}>handle</button>
  </div>
}
}
function Contents(props){
	return <p>Contents组件的props.value:{props.value}

哈哈哈哈
  </p>
}
Contents.propTypes ={
	value:PropTypes.number.isRequired
}