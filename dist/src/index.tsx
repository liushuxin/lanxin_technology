
import * as React from "react";
import * as ReactDOM from 'react-dom';
interface HelloProps { compiler: string; framework: string; }
 class Hello extends React.Component<HelloProps, {}> {
    constructor(props:HelloProps){
        super(props);
        this.state = {}
    }
    render(){
        console.log(_);
        let self = this;
        return <h1>H{this.props.compiler}!{this.props.framework} </h1>;

    }

}
ReactDOM.render(
<Hello compiler="1" framework="2"/> ,
document.querySelectorAll('#app')[0]);