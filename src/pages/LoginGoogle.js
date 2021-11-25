import React, { Component } from 'react';
import GoogleLogin from "react-google-login"
export default class LoginGoogle extends Component {
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    render() {
        return (
            <div>
                <GoogleLogin
    clientId="301571072540-u9l583p2jregchqls2nv0b1r3v6ev7dl.apps.googleusercontent.com"
    buttonText="ورود با گوگل"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> 
            </div>
        )
    }
}
 