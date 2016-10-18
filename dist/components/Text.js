import React,{Component} from 'react';
export default class Text extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    let self = this;
    return (
      <div className="main-wrapper">
      {self.props.text}
      </div>
      )
  }

}