import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import counter from './reducer/index';
import {createStore} from 'redux';
const store = createStore(counter);
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			text:""
		};
    this.menu =[{
      text:"楼下",
    },{
      text:"庆丰包子铺",
    },{
      text:"锐创国际",
    },{
      text:"秦香食府",
    }]
	}
	componentDidMount(){
		let self = this;
	

	}
  handleMenu(){
    let self = this;
    let random =Math.floor((Math.random() *4));
    let text = "";
    if(random<4){
      text = this.menu[random].text;
    }
    self.setState({
      text:text
    });
    
    

  }
	
	render(){
		let self =this;
		return (
			<div>
        <h1>吃饭帮:</h1>
        
        <div>
 <button className="btn btn-success" onClick={()=>{self.handleMenu()}}>点击生成要去吃饭的地点</button>
        </div>
       
        <div style={{fontSize:"30px"}}>
{self.state.text}
        </div>

				
			</div>
			);
	}
}


ReactDOM.render(<App/>,
	document.querySelectorAll('#app')[0]);