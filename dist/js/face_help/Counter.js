import React,{Component,propTypes} from 'react';
import {connect} from 'react-redux';
import jquery from 'jquery';
import { Button ,ButtonToolbar} from 'react-bootstrap';
import * as ActionCreators from './actions';
import PNG1 from '../../images/main/sm.png';
class Counter extends Component{
	constructor(props){
		super(props);
		// this.menu =[{
		// text:"楼下",
		// },{
		// text:"庆丰包子铺",
		// },{
		// text:"锐创国际",
		// },{
		// text:"秦香食府",
		// }]
		this.incrementIfOdd = this.incrementIfOdd.bind(this);
		this.incrementAsync = this.incrementAsync.bind(this);
	}
	componentDidMount(){
		let self = this;
		var a ={
			first:"name",
			second:"age"
		};
		for(var key in a){
			console.log(key);
		}
		function fun(){
			console.log("first fun");

		}
		var s = Object.create(a);
		console.log(Object.getOwnPropertyDescriptor(s,'first'));
		console.log(Object.getOwnPropertyDescriptor(a,'first'));
		console.log(Function.prototype.__proto__ == Object.prototype);
		console.log(Object.prototype.__proto__);
		console.log(fun.prototype);
		console.log(fun.__proto__);
		console.log(Function.prototype);
		//汉诺塔问题
		function hannuota(sum,source,help,dist){
			if(sum>0){
				hannuota(sum-1,source,dist,help);
				console.log(sum +source+ "---->"+dist);
				hannuota(sum-1,help,source,dist);
			}
			
		}
		hannuota(3,"A","B","C");

		var obj = Object.create({a:1,b:2});
		console.log("Object.create:");
		console.log(obj);
		console.log(obj.a);
		console.log("Object.prototype");
		console.log(Object.prototype);

		console.log(Object);
		console.log(Object.__proto__ );
		//console.log();
		// console.log()
		console.log(Object.prototype.__proto__);
		console.log(Function.prototype);
		console.log((Function.prototype.__proto__ === Object.prototype));
		console.log(Object.prototype.toString(Array.prototype));
		var bArray = [1,2,43,4,5,6,6,78,65,9,900,666]
		console.log(bArray);
		bArray.length = 5;
		bArray.length = 7;
		bArray.splice(3,1);
		console.log(bArray);
		self.bjtest();
	}
	incrementIfOdd(){
		let self = this;
		if(this.props.value % 2 !==0){
			this.props.onIncrement();
		}
	}
	bjtest(){
		var eventuality = function (that) {
			var registry = {};
			//触发事件
			that.fire = function (event) {
				var array,
				func,
				handler,
				i,
				type = typeof event === "string" ? event :event.type;
				if(registry.hasOwnProperty(type)){
					array = registry[type];
					for(i = 0; i<array.length; i +=1){
						handler = array[i];
						func = handler.method;
						if(typeof func === 'string'){
							func = this[func];
						}
						func.apply(this,handler.parameters||[event]);
					}
				}
				return this;
			}
			that.on = function(type,method,parameters){
				var handler = {
					method:method,
					parameters:parameters
				};
				if(registry.hasOwnProperty(type)){
					registry[type].push(handler);
				}else{
					registry[type] = [handler];
				}
				return this;

			}
			return that;
		};
		var objectEventTest = {
			a:1,
			b:2,
			getA:function(){
				console.log(this.a);
			},
			getB:function(){
				console.log(this.b);
			},
			showC:function(c){
				console.log(c);
			}
		}
		eventuality(objectEventTest);
		objectEventTest.on("show","getA");
		objectEventTest.on("show","getB");
		objectEventTest.on("show1","showC",["show C!!"]);
		objectEventTest.fire("show");
		
	}
	// componentDidMount(){
	// 	let self = this;
	// 	var obj1 ={
	// 		name:"lihua",
	// 		age:23
	// 	};
	// 	console.log(obj1);
	// 	function Person(name,age){
	// 		this.name = name;
	// 		this.age = age;
	// 	}
	// 	function Student(stuId){
	// 		this.stuId =stuId;
	// 	}
	// 	let person = new Person('name',23);
	// 	Student.prototype = person;
	// 	var student = new Student("0234");
	// 	//console.log(Person.prototype);
	// 	console.log(Student.prototype);
	// 	console.log(student.__proto__);
	// 	console.log(Object.prototype.constructor);

	// }
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
	incrementAsync(){
		let self = this;
		setTimeout(this.props.onIncrement,1000);
	}
	render(){
		let self = this;
		const {value,onIncrement,onDecrement} = this.props;
		return <p>
			Click:{self.props.value} times;
			{' '}
			<button onClick={self.props.onIncrement}>+</button>
			{' '}
			<button onClick={self.props.onDecrement}>-</button>
			<button onClick={self.incrementIfOdd}>Increment if Odd</button>
			<button onClick={this.incrementAsync}>Increment async</button>
			<button onClick={this.props.success}>ajax Request</button>
			<button onClick={self.props.onUNDO}>undo</button>
			<button onClick={this.props.onREDO}>redo</button>
			{this.props.async? this.props.async.counter:""}
			<img src={PNG1}/>
			<ButtonToolbar>
				<Button>Defautl</Button>
				<Button bsStyle="primary">Primary</Button>
			</ButtonToolbar>
			Object.__proto__ 指向 Function.prototype 都等于一个匿名函数,
			匿名函数算是一个对象，而不能看做一个函数，所以它没有函数特有的prototype 属性，只有__proto__ 属性，并且该属性指向Object.prototype
		</p>

	}
}
console.log(ActionCreators);
export default connect(
    state => ({value:state.counter.present,
	async:state.async}),
    ActionCreators
)(Counter);