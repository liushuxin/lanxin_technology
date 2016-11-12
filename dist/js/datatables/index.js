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
	$(".main-tb").DataTable();
	}
	render(){
		let self = this;
		return (
			<div className="dtable">
			<table className="main-tb">
<thead>
	<tr>
		<th>标题1</th>
		<th>标题2</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>
			第一行
		</td>
		<td>
			第二行
		</td>
	</tr>
</tbody>
			</table>
			</div>
			)
	}
}
 ReactDOM.render(<App/>,
 document.getElementById('app') );
