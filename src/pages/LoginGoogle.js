import React, { Component } from 'react';
import GoogleLogin from "react-google-login"
export default class LoginGoogle extends Component {
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    render() {
        return (
            <div style={{display:"flex",height:"20px"}}>
                <GoogleLogin
    clientId="301571072540-jibtvlsef4hj9otika4cfj7rcnrgl00e.apps.googleusercontent.com"
    buttonText="ورود با گوگل"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> 
            </div>
        )
    }
}
 