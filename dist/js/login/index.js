import React, { Component, propTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import IndexSass from '../../sass/index.scss';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };
    }
    handleUserChange(e) {
        this.setState({
            username:e.target.value
        })

    }
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })

    }
    handleLogin(){
        $.post('/login/validateUser',{username:this.state.username,password:this.state.password},(result) => {
            if (result.code == 0){
                alert("登录成功");
                window.location.pathname = "/";


            }else {
                alert(result.code);

            }
        })

    }
    render() {
        let self = this;
        return (<div>
            用户名：<input type="text" onChange={this.handleUserChange.bind(this)} placeholder="请输入用户名" />
            密码：<input type="password" onChange={this.handlePasswordChange.bind(this)} placeholder="请输入密码" />
            <button onClick={this.handleLogin.bind(this)}>登录</button>
        </div>);
    }

}
let rendedObj = ReactDOM.render(<App />,
    document.getElementById('app'));
