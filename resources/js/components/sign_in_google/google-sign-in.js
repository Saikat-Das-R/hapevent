/**
 * Created by Saikat on 24-Oct-20.
 */
import React,{Component} from 'react';
import './google-sign-in.css'
import gmail from './../../img/gmail.png'

export default class GoogleSignIn extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div className="gmail-div">
                <img src={gmail} alt="gmail"/>
                    <p>Log in with G-mail id</p>
            </div>
        )
    }
}