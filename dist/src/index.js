import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component{
    componentDidMount(){
        let self = this;
        let a = [1, 2, 3];
        
       console.log(a.includes(2)); 
        // true 
        
        console.log(a.includes(4)); 
    }
    render(){
        return <div>
           <h1>组件中心 ,react主页</h1> 
               
        </div>
    }
}
ReactDOM.render(<App/>,
document.querySelectorAll("#app")[0])