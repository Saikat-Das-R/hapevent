/**
 * Created by Saikat on 24-Oct-20.
 */
import React,{Component} from 'react';
import './google-sign-in.css'
import gmail from './../../img/gmail.png'
import { GoogleLogin, GoogleLoginProps } from 'react-google-login';


const CLIENT_ID = "425456969942-nlb0d6fpp43q1dooktvu7pitsg98uhhf.apps.googleusercontent.com";
export default class GoogleSignIn extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isLogined: false,
            accessToken: ''
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    login (response) {
        if(response.accessToken){
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken
            }));
        }
    }

    logout (response) {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));
    }

    handleLoginFailure (response) {
        alert('Failed to log in')
    }

    handleLogoutFailure (response) {
        alert('Failed to log out')
    }


    render(){
        return(


                    <GoogleLogin
                                 clientId={ CLIENT_ID }
                                 render={renderProps => (
                                     <div onClick={renderProps.onClick} className="gmail-div" >
                                         <img src={gmail} alt="gmail"/>
                                         <p>Log in with G-mail id</p>
                                     </div>
                                 )}
                                 onSuccess={ this.login }
                                 // onFailure={ this.handleLoginFailure }
                                 cookiePolicy={ 'single_host_origin' }
                                 responseType='code,token'>

                    </GoogleLogin>

        )
    }
}