import React,{Component,PropTypes} from 'react';
import _ from 'lodash';
export default class Content extends Component{
constructor(props){
  super(props);
  this.state = {
  	value:0
  }
}
componentDidMount(){


}
render(){
  let self = this;
  return <div>
  <button className="btn btn-success" onClick={()=>{self.setState({value:self.state.value+1})}}>增加</button>
   <Contents value={self.state.value}></Contents>
  </div>
}
}
function Contents(props){
	return <p>Contents组件的props.value:{props.value}</p>
}
Contents.propTypes ={
	value:PropTypes.number.isRequired
}