import React,{Component,propTypes} from 'react';
import {connect} from 'react-redux';
var $  = require( 'jquery' );
var DataTable = require( 'datatables.net' );
require( 'datatables.net-dt/css/jquery.dataTables.css' );
import {QueryData,setQueryParam} from './Action';
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			searchContent:''
		}
		this.$datatable ={};
	}
	componentDidMount(){
		let self =this;
		$.get(self.props.config.backend,function(data){
			//console.log(data);
			self.props.onQuery(data);
			self.paintTable();
			
		});
		self.handlePromise();

	}
	handlePromise(){
		let self = this;
		var promise = new Promise((resolve,reject)=>{
			$.get("/components/firstAjax",function(data){
				console.log(data);
				resolve(data);
			});

		});
		promise.then((value)=>{
			console.log(value);
			var promise1 = new Promise((resolve,reject)=>{
				$.get("/components/secondAjax",function(data){
					console.log(data);
					resolve(data);
				});

			});
			return promise1
			

		},(error)=>{
			console.log(error);
		}).then(result => console.log(result));

	
	}
	/**
	 * 绘制表格
	 */
	
	paintTable(){
		let self = this;
		self.$datatable =$(".main-tb").DataTable({
		"data":self.props.data, //渲染数据
		  "retrieve":true,//是否返回引用
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
        { "data": "_id" ,"title":"数据id"},
        { "data": "name","title":"姓名" },
        { "data": "age","title":"年龄" }
    	],
    	 
    	"lengthMenu": [ 5, 10, 15, 20, 100 ],
    	 "pagingType": "full_numbers",
    	"language":{
    		"emptyTable":"没有查询到相应数据@_@",
    		"info":"从第 _START_ 条到第 _END_条，共计 _TOTAL_ 条数据",
    		"infoEmpty":"共0条数据",
    		"infoFiltered":"(filtered from _MAX_ total entries)",
		    "infoPostFix":    "",
		    "thousands":",",
		    "lengthMenu": "每页显示 _MENU_ 条数据",
		    "loadingRecords": "加载中...",
		    "processing":     "正在进行中...",
		    "search":         "搜索:",
		    "zeroRecords":    "没有搜索到你想要的记录",
		    "paginate": {
		        "first":      "第一页",
		        "last":       "最后一页",
		        "next":       "下一页",
		        "previous":   "上一页"
		    },
		    "aria": {
		        "sortAscending":  ": activate to sort column ascending",
		        "sortDescending": ": activate to sort column descending"
		    }
    	}
		});
		self.$datatable.draw();
	}
	queryDataTables(){
		let self = this;
		
		$.get(self.props.config.backend,{name:self.props.searchContent},function(data){
			console.log(data);
			self.props.onQuery(data);
			self.$datatable.destroy();
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
		self.props.handleInput(event.target.value);
	
	}
	render(){
		let self = this;
		return (
			<div className="dtable">
			表格
			<input type="text" value={self.props.searchContent} onChange={self.handleInput.bind(this)} className="search"/>
			<button onClick={self.queryDataTables.bind(this)}>查询</button>
			<table className="main-tb">
			</table>
			h
			<button onClick={self.updateUser.bind(this)}>更新</button>
			<button onClick={self.addUser.bind(this)}>新增</button>
			</div>
			)
	}
}
// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    data: state.data,
    searchContent:state.searchContent
  };
}
// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onQuery: (data) => dispatch(QueryData(data)),
    handleInput:(queryText) =>dispatch(setQueryParam(queryText))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);