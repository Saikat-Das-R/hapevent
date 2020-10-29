/**
 * Created by Saikat on 24-Oct-20.
 */
import React,{Component} from 'react';
import Header from '../../header/header'
import Footer from '../../footer/footer'
import midImage from '../../../img/happ_header.jpg'
import logo from '../../../img/happe_logo.png'
import './sign-in-page.css'
import {ManualSignIn} from "../../sign_in_manual/manual-sign-in";
import GoogleSignIn from "../../sign_in_google/google-sign-in";
import FacebookSignIn from "../../sign_in_facebook/facebook-sign-in";
import ContactSignIn from "../../sign_in_mobile/contact-sign-in";

export default class SignIn extends Component{
    constructor(){
        super();
        this.state ={

        }
    }

    render(){
        return(
            <div >
                <header>
                    <Header />
                </header>
                <div className="mid-image">
                    <img src={midImage}/>
                </div>
                <div className="logo">
                    <img src={logo}/>
                </div>
                <section className="card">
                    <div className="login">
                        <input type="email" placeholder="Email Address"/>
                        <input type="password" placeholder="Password"/>
                        <ManualSignIn />
                    </div>
                    <div className="bar">
                        <div></div>
                        <p>Or</p>
                        <div ></div>
                    </div>
                    <div className="other-login">
                        <GoogleSignIn/>
                        <FacebookSignIn/>
                        <ContactSignIn/>
                    </div>
                    <div class="signup">
                        <p>Don't have an account? <a href="./signUp.html">Sign up </a>now</p>
                    </div>
                </section>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }
}