import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			val:0
		};
	}
	componentDidMount(){
		let self = this;
		 console.log(self.refs.title);
		 self.setState({
		 	val:self.state.val +1
		 });
		 console.log(self.state.val);
		 self.setState({
		 	val:self.state.val+1
		 });
		 console.log(self.state.val);
		 setTimeout(()=>{
		 	self.setState({
		 	val:self.state.val +1
		 });
		 console.log(self.state.val);
		 self.setState({
		 	val:self.state.val+1
		 });
		 console.log(self.state.val);

		 },0);


	}
	render(){
		let self =this;
		return (
			<div ref="hc">
				HighChart
				<Title title="主标题" ref="title" />
			</div>
			);
	}
}

class Title extends Component{
	constructor(props){
		super(props);
		
	}
	render(){
		let self = this;
		return (
			<div className="title-wrapper">
				{self.props.title}
			</div>
			)
	}
}

ReactDOM.render(<App/>,
	document.querySelectorAll('#app')[0]);