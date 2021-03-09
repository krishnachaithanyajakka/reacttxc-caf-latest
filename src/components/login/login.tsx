import React from 'react';
import MainService from './../../services/main-service';

export default class LoginComponent extends React.Component{
    private mainserviceInstance:MainService;
    constructor(props){
        super(props);
        this.mainserviceInstance=new MainService();
    }

    makeLogin=()=>{
       const loginData= {txtEmail:'finland@yopmail.com',txtPassword:'12341234'};
       this.mainserviceInstance.makeLogin(loginData).then(data=>{
           console.log("login api response=====>", data);
       })
    }
    render() {
        return (<div>
            <h2>Login Page Component</h2>
            <button onClick={this.makeLogin}>Make a Login</button>
        </div>);
    }
}