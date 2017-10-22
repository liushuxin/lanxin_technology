import * as React from "react";
import * as ReactDOM from 'react-dom';
interface HelloProps { compiler: string; framework: string; }
 class Hello extends React.Component<HelloProps, {}> {
    constructor(props:HelloProps){
        super(props);
        this.state = {}
    }
    render(){
        let self = this;
        return <h1>Hello from{this.props.compiler}  andwewew !{this.props.framework} </h1>;

    }

}