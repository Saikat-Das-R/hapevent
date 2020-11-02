/**
 * Created by Saikat on 31-Oct-20.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SignIn from "./pages/sign-in-page/sign-in-page";
import SignUp from "./pages/sign-up-page/sign-up-page";
import HomePage from "./pages/homepage/homepage";
const signUpProps = {
    gmail:"Sign up With G-mail id",
    facebook:"Sign up with Facebook",
    phone:"Sign up with phone number"
}
const signInProps = {
    gmail:"Log in With G-mail id",
    facebook:"Log in  with Facebook",
    phone:"Log in with phone number"
}
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/sign_in' component={()=><SignIn {...signInProps} />} />
                <Route path='/browse_event' component={SignIn}/>
                <Route path='/sign_up' component={()=><SignUp {...signUpProps} />}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('homepage'))