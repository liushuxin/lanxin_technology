import React,{Component} from 'react';
export default class Text extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nowProps:");
    console.dir(this.props);
    console.log("nextProps:");
    console.dir(nextProps);
    console.log("nowState:");
    console.dir(this.state);
    console.log("nextState:");
    console.dir(nextState);
    return true;
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