import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HighCharts from '../../components/HighCharts';
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
	self.setAjaxTest();

	}
	setAjaxTest(){
		let self = this;
		console.log($("#form1").serialize());

		$.ajax({
			url:"/getData",
			type:"POST",
			timeout:3000,
			dataType:"json",
			beforeSend(){
				console.log("开始请求数据！");
			},
			complete(){
				console.log("请求完成")
			},
			success:(result)=>{
				console.log(result);
				var mydata = {
					a:12,
					b:34,
					c:56
				}
				console.log($.param(mydata));

			},
			error:function(xhr,textStatus,err){
				console.log(err);

			}
		});
	}
	render(){
		let self =this;
		return (
			<div ref="hc">
				
				<HighCharts />
			</div>
			);
	}
}

ReactDOM.render(<App/>,
	document.querySelectorAll('#app')[0]);