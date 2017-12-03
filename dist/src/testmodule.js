import  React from "react";
import  ReactDOM from 'react-dom';
import './style.scss'
 export default class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        let self = this;
        return <div>
            <h1>Hello from{this.props.compiler}  andwewew !{this.props.framework} </h1>
            <div className="chart">
                <div className="loading-wrapper">
                    <div className="spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </div>

                </div>

            </div>
           <div className="chart">
                <div className="loading-wrapper1">
                    <div className="sk-circle">
                        <div className="sk-circle1 sk-child"></div>
                        <div className="sk-circle2 sk-child"></div>
                        <div className="sk-circle3 sk-child"></div>
                        <div className="sk-circle4 sk-child"></div>
                        <div className="sk-circle5 sk-child"></div>
                        <div className="sk-circle6 sk-child"></div>
                        <div className="sk-circle7 sk-child"></div>
                        <div className="sk-circle8 sk-child"></div>
                        <div className="sk-circle9 sk-child"></div>
                        <div className="sk-circle10 sk-child"></div>
                        <div className="sk-circle11 sk-child"></div>
                        <div className="sk-circle12 sk-child"></div>
                    </div>

                </div>

           </div>
           <div className="chart">
                <div className="loading-wrapper2">
                    <div className="sk-fading-circle">
                        <div className="sk-circle1 sk-circle"></div>
                        <div className="sk-circle2 sk-circle"></div>
                        <div className="sk-circle3 sk-circle"></div>
                        <div className="sk-circle4 sk-circle"></div>
                        <div className="sk-circle5 sk-circle"></div>
                        <div className="sk-circle6 sk-circle"></div>
                        <div className="sk-circle7 sk-circle"></div>
                        <div className="sk-circle8 sk-circle"></div>
                        <div className="sk-circle9 sk-circle"></div>
                        <div className="sk-circle10 sk-circle"></div>
                        <div className="sk-circle11 sk-circle"></div>
                        <div className="sk-circle12 sk-circle"></div>
                    </div>

                </div>

           </div>
           
            
            </div>;

    }

}
ReactDOM.render( <Hello compiler="a" framework="bbkalll" />,
document.querySelectorAll('#app')[0])