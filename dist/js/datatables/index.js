import React,{Component,propTypes} from 'react';
import ReactDOM from 'react-dom';
var $  = require( 'jquery' );
var DataTable = require( 'datatables.net' );
require( 'datatables.net-dt/css/jquery.dataTables.css' );
class App extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		let self =this;
		$.get("/components/getData",{},function(data){
			console.log(data);
	$(".main-tb").DataTable({
		data:data,
		 "columns": [
        { "data": "_id" ,"title":"数据id"},
        { "data": "name","title":"姓名" },
        { "data": "age","title":"年龄" }
    	]
		});
	});


	}
	updateUser(){
		let self = this;
		$.get("/components/updateData",{},function(data){
			alert(data);

		});
	}
	render(){
		let self = this;
		return (
			<div className="dtable">
			<table className="main-tb">
			</table>

			<button onClick={self.updateUser.bind()}>更新</button>
			</div>
			)
	}
}
 ReactDOM.render(<App/>,
 document.getElementById('app') );
