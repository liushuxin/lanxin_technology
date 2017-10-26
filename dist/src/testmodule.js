import  React from "react";
import  ReactDOM from 'react-dom';
 export default class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        let self = this;
        return <h1>Hello from{this.props.compiler}  andwewew !{this.props.framework} </h1>;

    }

}
ReactDOM.render( <Hello compiler="a" framework="bbkalll" />,
document.querySelectorAll('#app')[0])