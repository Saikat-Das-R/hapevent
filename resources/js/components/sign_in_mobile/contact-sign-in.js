/**
 * Created by Saikat on 24-Oct-20.
 */
import React,{Component} from 'react';
import './contact-sign-in.css'

export default class ContactSignIn extends Component{
    constructor({title}){
        super();
        this.state={
            title
        }
    }


    render(){
        return(

                <div class="phone-div">
                    <p>{this.state.title}</p>
                </div>

        )
    }
}