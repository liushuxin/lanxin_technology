import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component{
    render(){
        return <div>
           <h1>组件中心 ,react主页</h1> 
               
        </div>
    }
}
ReactDOM.render(<App/>,
document.querySelectorAll("#app")[0])