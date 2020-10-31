/**
 * Created by Saikat on 24-Oct-20.
 */
import React,{Component} from 'react';
import Header from '../../header/header'
import Footer from '../../footer/footer'
import midImage from '../../../img/happ_header.jpg'
import logo from '../../../img/happe_logo.png'
import './sign-in-page.css'
import {Link} from "react-router-dom";
import {ManualSignIn} from "../../sign_in_manual/manual-sign-in";
import GoogleSignIn from "../../sign_in_google/google-sign-in";
import FacebookSignIn from "../../sign_in_facebook/facebook-sign-in";
import ContactSignIn from "../../sign_in_mobile/contact-sign-in";
import {Helmet} from 'react-helmet'

export default class SignIn extends Component{
    constructor(){
        super();
        this.state ={
        }
    }

    render(){
        return(
            <div >
                <Helmet>
                    <title>HapEvent | Sign In</title>
                </Helmet>
                <header>
                    <Header />
                </header>
                <div className="mid-image">
                    <img src={midImage}/>
                </div>
                <div className="logo">
                    <img src={logo}/>
                </div>
                <section className="card-sign-in">
                    <div className="login">
                        <input type="email" placeholder="Email Address"/>
                        <input type="password" placeholder="Password"/>
                        <ManualSignIn />
                    </div>
                    <div className="bar-sign-in">
                        <div></div>
                        <p>Or</p>
                        <div ></div>
                    </div>
                    <div className="other-login">
                        <GoogleSignIn/>
                        <FacebookSignIn/>
                        <ContactSignIn/>
                    </div>
                    <div class="sign_in">
                        <p>Don't have an account? <Link to='/sign_up'>Sign up</Link> now</p>
                    </div>
                </section>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }
}