import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component{
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		let self =this;
		return (
			<div>
				HighChart 容器
			</div>
			);
	}
}
ReactDOM.render(<App/>,
	document.querySelectorAll('#app')[0]);