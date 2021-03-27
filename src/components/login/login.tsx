import React from 'react';
import MainService from './../../services/main-service';

type MyProps={};
type MyState={
    isFormValid:boolean
    serverError:string
    fields:{
        txtEmail:string,
        txtPassword:string
    },
    errors:{
        txtEmail:string,
        txtPassword:string
    }
};
export default class LoginComponent extends React.Component<MyProps,MyState>{
    private mainserviceInstance:MainService;
    constructor(props){
        super(props);
        this.state = {
            isFormValid:false,
            serverError:'',
            fields: {
                txtEmail:'',
                txtPassword:''
            },
            errors:{
                txtEmail:'',
                txtPassword:''
            }
        }
        this.mainserviceInstance=new MainService();
    }

    doLogin=()=>{
       if(this.state.isFormValid){
        this.mainserviceInstance.doLogin(this.state.fields).then(data=>{
            if(data && data['success'] === 'true'){
                this.loginSuccess(data);
                this.setState({fields: { txtEmail:'',txtPassword:''}})
            }else{
                this.loginFailure(data);
            }
        });
       }
      
    }

    loginSuccess(successData){
        localStorage.setItem('isLoggedIn','true');
        sessionStorage.setItem("user", 'true');
        // this.commonService.broadCastLoginSuccess(true);
    }

    loginFailure(failureData){
      let serverError= "Something went wrong. Please Try again Later or Contact Customer support.";
      if (failureData && failureData["errors"]) {
        if (failureData["errors"]["remoteError"]) {
           serverError = failureData["errors"]["remoteError"];
           return;
         } 
         if (failureData["errors"]["accountLocked"]) {
           /**Below logic/work around is required to remove crossbrowser issue in safari, firefox & windows */
           const errorMessage = failureData["errors"]["accountLocked"].split(":")[0];
           serverError = errorMessage + new Date(failureData["errors"]["accountLocked"].substr(failureData["errors"]["accountLocked"].indexOf(":")));
           return;
         }
         if(failureData['errors']['txtPassword'] || failureData['errors']['txtEmail']){
             serverError='Required input feilds are missing, please provide all the required information';
         }
         let errorCode;
         if(failureData["errors"]['errorCode']){
           errorCode=failureData["errors"]['errorCode'] 
         }
         if(failureData["errors"]["internalErrorCode"]){
           errorCode=failureData["errors"]["internalErrorCode"]
         }
         if(errorCode){
            switch(errorCode){
                case '100152':
                  serverError="Your account has been suspended. If you have any questions, send us an email at support@casinofriday.com.";
                break;
                case '100157':
                  serverError="Your CasinoFriday account is closed. If you have any questions, send us an email at support@casinofriday.com.";
                break;
                case '100173':
                  serverError="Your account is currently in a “cool off” state. You will not be able to log in until your selected cool off period is up.";
                break;
                case '100174':
                  serverError="You failed to log in too many times! Your account has been closed for security reasons. Please contact customer support to open your account.";
                break;
                case '11001':
                  serverError = "The account and password you entered don't match.";
                break;
                default:
                 serverError = "Something went wrong. Please Try again Later or Contact Customer support.";
              }
         }
       }
       this.setState({serverError:serverError});
    }



    validateFrom(name){
        let feilds:any=this.state.fields;
        let errors:any=this.state.errors
        // eslint-disable-next-line
        const regEx=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;
        if(name === 'txtEmail'){
            errors['txtEmail']='';
            if(!feilds['txtEmail']){
                errors['txtEmail'] = 'This field is required';
            }
            else if(feilds['txtEmail'] && (feilds['txtEmail'].length<5 || feilds['txtEmail'].length>50)){
                errors['txtEmail']= 'This field cannot contain less than 5 or more than 50 characters';
            }
            else if(feilds['txtEmail'] && !regEx.test(feilds['txtEmail'] )){
                errors['txtEmail']='Email is not valid';
            }
        }
      
        if(name === 'txtPassword'){
            errors['txtPassword']='';
            if(!feilds['txtPassword']){
                errors['txtPassword']='This field is required';
            }
            else if(feilds['txtPassword'] && feilds['txtPassword'].length<7){
                errors['txtPassword']="Password is not strong enough";
            }
        }
        this.setState({errors:errors});
        this.updateFromValidStatus();
    }

    updateFromValidStatus(){
        let formvalidStatus:boolean=true;
        if(this.state.errors['txtEmail'] || !this.state.fields['txtEmail']){
            formvalidStatus=false;
        }
        if(this.state.errors['txtPassword'] || !this.state.fields['txtPassword']){
            formvalidStatus=false;
        }
        this.setState({isFormValid:formvalidStatus});
    }

    fromFieldsChange = (e) => {
        if (this.state.serverError) {
            this.setState({ serverError: '' });
        }
        const { name, value } = e.target;
        let fields = this.state.fields;
        fields[name] = value;
        this.setState({ fields });
        this.validateFrom(name)
    }

    render() {

        return (
            <div>
                {this.state.serverError &&  <div style={{ color: "red" }}>{this.state.serverError}</div>}
                <div className="from-feild-controls">
                    <input name="txtEmail" type="email" size={150} placeholder="Your email" onChange={this.fromFieldsChange} value={this.state.fields.txtEmail}/>
                    <br />
                    {(this.state.errors['txtEmail'] && this.state.errors['txtEmail'].length > 0) ?
                        <span style={{ color: "red" }}>{this.state.errors['txtEmail']}</span> : ''}

                    <input name="txtPassword" type="password" size={150} placeholder="Your password" onChange={this.fromFieldsChange} value={this.state.fields.txtPassword}/>
                    <br />
                    {(this.state.errors['txtPassword'] && this.state.errors['txtPassword'].length > 0) ?
                        <span style={{ color: "red" }}>{this.state.errors['txtPassword']}</span> : ''}
                    <br />
                    <button onClick={this.doLogin} disabled={!this.state.isFormValid}>Login In</button>
                </div>
            </div>
      );
    }
}