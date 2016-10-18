import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Text from '../../components/Text';
export default class User extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    let self = this;
    return (
      <div>
      <Text text="文本组件"/>
      </div>
      )
  }

}
ReactDOM.render(
  <User/>,
  document.querySelectorAll('#app')[0]
);