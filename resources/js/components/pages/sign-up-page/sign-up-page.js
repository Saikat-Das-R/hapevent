/**
 * Created by Saikat on 24-Oct-20.
 */
/**
 * Created by Saikat on 24-Oct-20.
 */
import React,{Component} from 'react';
import Header from '../../header/header'
import Footer from '../../footer/footer'
import midImage from '../../../img/happ_header.jpg'
import logo from '../../../img/happe_logo.png'
import './sign-up-page.css'
import {Helmet} from 'react-helmet';
import {ManualSignIn} from "../../sign_in_manual/manual-sign-in";
import GoogleSignIn from "../../sign_in_google/google-sign-in";
import FacebookSignIn from "../../sign_in_facebook/facebook-sign-in";
import ContactSignIn from "../../sign_in_mobile/contact-sign-in";

export default class SignUp extends Component{
    constructor(){
        super();
        this.state ={

        }
    }

    componentDidMount() {
        document.title = 'HapEvent | Sign Up';
    }

    render(){
        return(
            <div >
                <Helmet>
                    <title>HapEvent | Sign Up</title>
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
                <section className="card">
                    <div className="txt-div">
                        <p>Create an account</p>
                        <div ></div>
                    </div>
                    <div className="other-log_up">
                        <GoogleSignIn/>
                        <FacebookSignIn/>
                        <ContactSignIn/>
                    </div>
                    <div className="bar">
                    <div></div>
                    <p>Or</p>
                    <div ></div>
                    </div>
                    <div className="log_up">
                    <input type="text" placeholder="First & Last Name"/>
                    <input type="email" placeholder="Work Email"/>
                    <input type="password" placeholder="Password"/>
                    </div>
                    <div className="signup">
                        <div className="check-1">
                            <input type="checkbox"/>
                                <p>By signing up I agree to Happee’s terms of service and
                                    privacy policy </p>
                        </div>
                        <div className="check-2">
                            <input type="checkbox"/>
                            <p>Remember me</p>
                        </div >
                        <aside className ="signup-button">
                            <div  >
                                <ManualSignIn/>
                            </div>
                        </aside>
                    </div>
                </section>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }
}