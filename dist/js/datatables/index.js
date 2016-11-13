import React,{Component,propTypes} from 'react';
import ReactDOM from 'react-dom';
var $  = require( 'jquery' );
var DataTable = require( 'datatables.net' );
require( 'datatables.net-dt/css/jquery.dataTables.css' );
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[],
			$datatable:{},
			searchContent:''
		}
	}
	componentDidMount(){
		let self =this;
		$.get("/components/getData",{},function(data){
			self.setState({
				data:data
			});
			self.paintTable();
	});


	}
	/**
	 * 绘制表格
	 */
	paintTable(){
		let self = this;
		self.state.$datatable =$(".main-tb").DataTable({
		data:self.state.data,
		  retrieve:true,
		 "columns": [
        { "data": "_id" ,"title":"数据id"},
        { "data": "name","title":"姓名" },
        { "data": "age","title":"年龄" }
    	]
		});
		self.state.$datatable.draw();
	}
	queryDataTables(){
		let self = this;
		
		$.get("/components/getData",{name:self.state.searchContent},function(data){
			console.log(data);
			self.setState({
				data:data
			});
			self.state.$datatable.destroy();
			self.paintTable();
			
		});
	}
	updateUser(){
		let self = this;
		$.get("/components/updateData",{},function(data){
			alert(data);

		});
	}
	addUser(){
		let self = this;
		$.get("/components/addData",{},function(data){
			alert(data);

		});
	}
	handleInput(event){
		let self = this;
		self.setState({
			searchContent:event.target.value
		});
	}
	render(){
		let self = this;
		return (
			<div className="dtable">
			<input type="text" value={self.state.searchContent} onChange={self.handleInput.bind(this)} className="search"/>
			<button onClick={self.queryDataTables.bind(this)}>查询</button>
			<table className="main-tb">
			</table>

			<button onClick={self.updateUser.bind()}>更新</button>
			<button onClick={self.addUser.bind()}>新增</button>
			
			</div>
			)
	}
}
 ReactDOM.render(<App/>,
 document.getElementById('app') );
