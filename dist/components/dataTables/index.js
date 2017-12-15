import React, { Component, propTypes } from 'react';
import { connect } from 'react-redux';
var $ = require('jquery');
import axios from "axios";
import { DragSource, DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
var DataTable = require('datatables.net');
require('datatables.net-dt/css/jquery.dataTables.css');
import { QueryData, setQueryParam } from './Action';

const type = 'Knight'
const spec = {
	beginDrag(props) {
		return {
			id: props.id,
			content: props.content
		}
	}
};
const spec1 = {
	drop(props, monitor, component) {
		// 获取正在拖放的数据
		const item = monitor.getItem();
		// 更新组件状态
		component.setState({
			item
		})

	}
}
function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}
function collect1(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
}

@DragSource(type, spec, collect)
class DivC extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		let self = this;
		const { connectDragSource, isDragging } = this.props;
		
		return connectDragSource(<div className={`child`}>{this.props.id}</div>);
	}
}
@DropTarget(type, spec1, collect1)
class DivT extends Component {
	constructor(props) {
		super(props);
		this.state= {
			item:{}
		}
	}
	render() {
		let self = this;
		console.log(self.state.item);
		const { connectDropTarget, isOver, canDrop, connectDragSource} = this.props;
		//console.log(connectDropTarget);
		console.log(connectDropTarget);
		console.log(canDrop);
		return connectDropTarget(<div className="wrap"  style={{ height: "400px", border: "1px solid black"}}>{self.props.children}</div>);
	}
}

@DragDropContext(HTML5Backend)
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchContent: ''
		}
		this.$datatable = {};
	}
	componentDidMount() {
		let self = this;
		axios.get(self.props.config.backend)
		.then(function (response) {
			console.log("response");
		  console.log(response);
		  self.props.onQuery(response.data);
		  self.paintTable();
		})
		.catch(function (error) {
		  console.log(error);
		});
	  
		self.handlePromise();

	}
	handlePromise() {
		let self = this;
		var promise = new Promise((resolve, reject) => {
			$.get("/components/firstAjax", function (data) {
				console.log(data);
				resolve(data);
			});

		});
		promise.then((value) => {
			console.log(value);
			var promise1 = new Promise((resolve, reject) => {
				$.get("/components/secondAjax", function (data) {
					console.log(data);
					resolve(data);
				});

			});
			return promise1


		}, (error) => {
			console.log(error);
		}).then(result => console.log(result));


	}
	/**
	 * 绘制表格
	 */

	paintTable() {
		let self = this;
		self.$datatable = $(".main-tb").DataTable({
			"autoWidth": false,
			"data": self.props.data, //渲染数据
			"retrieve": true,//是否返回引用
			buttons: [
				{
					extend: 'excelHtml5',
					text: 'Save current page',
					exportOptions: {
						modifier: {
							page: 'current'
						}
					}
				}
			],
			"dom": 'Bfrtip',
			"columns": [ //列定义
				{ "data": "_id", "title": "数据id" },
				{ "data": "name", "title": "姓名" },
				{ "data": "age", "title": "年龄" },
				{ "data": "_id", "title": "数据id" },
				{ "data": "name", "title": "姓名" },
				{ "data": "age", "title": "年龄" },
				{ "data": "_id", "title": "数据id" },
				{ "data": "name", "title": "姓名" },
				{ "data": "age", "title": "年龄" },
				{ "data": "_id", "title": "数据id" },
				{ "data": "name", "title": "姓名" },
				{ "data": "age", "title": "年龄" }
			],

			"lengthMenu": [5, 10, 15, 20, 100],
			"pagingType": "full_numbers",
			"language": {
				"emptyTable": "没有查询到相应数据@_@",
				"info": "从第 _START_ 条到第 _END_条，共计 _TOTAL_ 条数据",
				"infoEmpty": "共0条数据",
				"infoFiltered": "(filtered from _MAX_ total entries)",
				"infoPostFix": "",
				"thousands": ",",
				"lengthMenu": "每页显示 _MENU_ 条数据",
				"loadingRecords": "加载中...",
				"processing": "正在进行中...",
				"search": "搜索:",
				"zeroRecords": "没有搜索到你想要的记录",
				"paginate": {
					"first": "第一页",
					"last": "最后一页",
					"next": "下一页",
					"previous": "上一页"
				},
				"aria": {
					"sortAscending": ": activate to sort column ascending",
					"sortDescending": ": activate to sort column descending"
				}
			}
		});
		self.$datatable.draw();
	}
	queryDataTables() {
		let self = this;

		$.get(self.props.config.backend, { name: self.props.searchContent }, function (data) {
			console.log(data);
			self.props.onQuery(data);
			self.$datatable.destroy();
			self.paintTable();

		});
	}
	updateUser() {
		let self = this;
		$.get("/components/updateData", {}, function (data) {
			alert(data);

		});
	}
	addUser() {
		let self = this;
		$.get("/components/addData", {}, function (data) {
			alert(data);

		});
	}
	handleInput(event) {
		let self = this;
		self.props.handleInput(event.target.value);

	}
	render() {
		let self = this;
		return (
			<div className="dtable">
				表格
			<input type="text" value={self.props.searchContent} onChange={self.handleInput.bind(this)} className="search" />
				<button onClick={self.queryDataTables.bind(this)}>查询</button>
				<table className="main-tb">
				</table>
				h
			<button onClick={self.updateUser.bind(this)}>更新</button>
				<button onClick={self.addUser.bind(this)}>新增</button>
				
					
					<div className="wrap">
						<DivT>
						<DivC classN="flex1" id="1"/>
						<DivC classN="w200" id="2"/>
						<DivC classN="flex2" id="3"/>
						<DivC classN="w200" id="4"/>
						<DivC classN="flex2" id="5"/>
						</DivT >
					</div>
					<div>
						<DivT />

					</div>

					

			</div>
			
		)
	}
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
// function mapStateToProps(state) {
//   return {
//     data: state.data,
//     searchContent:state.searchContent
//   };
// }
// 哪些 action 创建函数是我们想要通过 props 获取的？
// function mapDispatchToProps(dispatch) {
//   return {
//     onQuery: (data) => dispatch(QueryData(data)),
//     handleInput:(queryText) =>dispatch(setQueryParam(queryText))
//   };
// }
export default connect(
	state => ({
		data: state.data,
		searchContent: state.searchContent
	}),
	dispatch => ({
		onQuery: (data) => dispatch(QueryData(data)),
		handleInput: (queryText) => dispatch(setQueryParam(queryText))
	})
)(App);