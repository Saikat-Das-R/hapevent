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
import { Redirect } from "react-router-dom";

export default class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            msg: "",
            isLoading: false,
            redirect: false,
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
        };
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onSignInHandler=this.onSignInHandler.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
    }

    onChangeHandler (e) {
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    };

    onSignInHandler (){
        this.setState({ isLoading: true });
        axios
            .post("http://localhost:8000/api/user-login", {
                email: this.state.email,
                password: this.state.password,
            })
            .then((response) => {
                this.setState({ isLoading: false });
                if (response.data.status === 200) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("userData", JSON.stringify(response.data.data));
                    this.setState({
                        msg: response.data.message,
                        redirect: true,
                    });
                }
                if (
                    response.data.status === "failed" &&
                    response.data.success === undefined
                ) {
                    this.setState({
                        errMsgEmail: response.data.validation_error.email,
                        errMsgPwd: response.data.validation_error.password,
                    });
                    setTimeout(() => {
                        this.setState({ errMsgEmail: "", errMsgPwd: "" });
                    }, 2000);
                } else if (
                    response.data.status === "failed" &&
                    response.data.success === false
                ) {
                    this.setState({
                        errMsg: response.data.message,
                    });
                    setTimeout(() => {
                        this.setState({ errMsg: "" });
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    handleValidation(){
        let {email, password} = this.state;
        let errors = {};
        let formIsValid = true;

        //Name
        // if(!email){
        //     formIsValid = false;
        //     errors["email"] = "Cannot be empty";
        // }
        //
        // if(typeof email !== "undefined"){
        //     if(!email.match(/^[a-zA-Z]+$/)){
        //         formIsValid = false;
        //         errors["email"] = "Only letters";
        //     }
        // }

        //Email
        if(!email){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }



        this.setState({errors: errors});
        return formIsValid;
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