import React,{Component,propTypes} from 'react';
import {connect} from 'react-redux';
import * as ActionCreators from './actions';
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
	incrementIfOdd(){
		let self = this;
		if(this.props.value % 2 !==0){
			this.props.onIncrement();
		}
	}
	componentDidMount(){
		let self = this;
		var obj1 ={
			name:"lihua",
			age:23
		};
		console.log(obj1);
		function Person(name,age){
			this.name = name;
			this.age = age;
		}
		function Student(stuId){
			this.stuId =stuId;
		}
		let person = new Person('name',23);
		Student.prototype = person;
		var student = new Student("0234");
		//console.log(Person.prototype);
		console.log(Student.prototype);
		console.log(student.__proto__);
		console.log(Object.prototype.constructor);

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
			<button onClick={self.props.onUNDO}>undo</button>
			<button onClick={this.props.onREDO}>redo</button>
		</p>

	}
}
console.log(ActionCreators);
export default connect(
    state => ({value:state.counter.present}),
    ActionCreators
)(Counter);