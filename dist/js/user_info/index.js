import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Text from '../../components/Text';
import $ from 'jquery';
export default class User extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    let self = this;
    $('#contrainer').html("内容");
  }
  render(){
    let self = this;
    return (
      <div>
      <Text text="文本组件"/>
      <div id="contrainer"></div>
      </div>
      )
  }

}
ReactDOM.render(
  <User/>,
  document.querySelectorAll('#app')[0]
);