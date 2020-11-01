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
import axios from "axios";
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {ManualSignIn} from "../../sign_in_manual/manual-sign-in";
import GoogleSignIn from "../../sign_in_google/google-sign-in";
import FacebookSignIn from "../../sign_in_facebook/facebook-sign-in";
import ContactSignIn from "../../sign_in_mobile/contact-sign-in";
import SignIn from "../sign-in-page/sign-in-page";

export default class SignUp extends Component{
    //userData;
    constructor(props){
        super(props);
        this.state = {
            signUpData: {
                name: "",
                email: "",
                phone: "",
                password: "",
                terms:"",
                remember:"",
                isLoading: "",
            },
            msg: "",
            fields: {},
            errors: {}
        };
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onSubmitHandler=this.onSubmitHandler.bind(this);
        this.handleValidation = this.handleValidation.bind(this);

    }

    //
    onChangeHandler (e){
        const { signUpData } = this.state;
        signUpData[e.target.name] = e.target.value;
        this.setState({ signUpData });
    };

    onSubmitHandler(e){
        e.preventDefault();
        this.setState({ isLoading: true });
        if(this.handleValidation()){
            axios.post("http://localhost:8000/api/user-signup", this.state.signUpData)
                .then((response) => {
                    this.setState({ isLoading: false });
                    if (response.data.status === 200) {
                        this.setState({
                            msg: response.data.message,
                            signUpData: {
                                name: "",
                                email: "",
                                phone: "",
                                password: "",
                                terms:"",
                                remember:""
                            },
                        });
                        setTimeout(() => {
                            this.setState({ msg: "" });
                        }, 2000);
                    }

                    if (response.data.status === "failed") {
                        this.setState({ msg: response.data.message });
                        setTimeout(() => {
                            this.setState({ msg: "" });
                        }, 2000);
                    }
                });
        }

    };
    handleValidation(){
        let fields = this.state.signUpData;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields.name){
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if(typeof fields.name !== "undefined"){
            if(!fields.name.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if(!fields.email){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if(typeof fields.email !== "undefined"){
            let lastAtPos = fields.email.lastIndexOf('@');
            let lastDotPos = fields.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.email.indexOf('@@') == -1 && lastDotPos > 2 && (fields.email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if (!fields.terms){
            formIsValid = false;
            errors["terms"] = "Must be check";
        }

        this.setState({errors: errors});
        return formIsValid;
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
                            <input type="text" name="name" placeholder="First & Last Name"
                                   value={this.state.signUpData.name}
                                   onChange={this.onChangeHandler}/>
                            {<span style={{color: "red"}}>{this.state.errors["name"]}</span>}
                            <br/>
                            <input type="email" name="email"  placeholder="Work Email"
                                   value={this.state.signUpData.email}
                                   onChange={this.onChangeHandler}
                            />

                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                            <br/>
                            <input type="password" name="password" placeholder="Password"
                                   value={this.state.signUpData.email}
                                   onChange={this.onChangeHandler}
                            />
                            <br/>
                            <span style={{color: "red", fontSize:"12"}}>{this.state.errors["password"]}</span>

                        </div>
                        <div className="signup">
                            <div className="check-1">
                                <input type="checkbox" name="terms"  value={true} onChange={this.onChangeHandler}/>
                                <p>By signing up I agree to Happee’s terms of service and
                                    privacy policy <span style={{color: "red"}}>{this.state.errors["terms"]}</span></p>

                                <br/>
                            </div>
                            <div className="check-2">
                                <input type="checkbox"  name="remember" onChange={this.onChangeHandler}/>
                                <p>Remember me</p>
                            </div >
                            <aside className ="signup-button">
                                <div  >
                                    <button type="submit" onClick={this.onSubmitHandler}>Sign Up
                                        <Link to='/sign_in' />
                                    </button>
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