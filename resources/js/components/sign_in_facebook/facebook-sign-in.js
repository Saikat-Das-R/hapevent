/**
 * Created by Saikat on 24-Oct-20.
 */
import React,{Component} from 'react';
import './facebook-sign-in.css'
import facebook from './../../img/facebook.png';

export default class FacebookSignIn extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div className ="facebook-div">
                <img src={facebook} alt="facebook"/>
                    <p>Log in with Facebook</p>
            </div>
        )
    }
}