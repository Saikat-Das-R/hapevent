/**
 * Created by Saikat on 24-Oct-20.
 */
import React,{Component} from 'react';
import './facebook-sign-in.css'
import facebook from './../../img/facebook.png';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = (response) => {
    console.log(response);
}
export default class FacebookSignIn extends Component{
    constructor({title}){
        super();
        this.state = {
            title
        }
    }


        render(){
          //  http://tiny.cc/9bd1tz
        return(
            <FacebookLogin
                appId="381212379741407"
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                    <div onClick={renderProps.onClick} className ="facebook-div">
                        <img src={facebook} alt="facebook"/>
                        <p>{this.state.title}</p>
                    </div>
                )}

                />
        )
    }
}