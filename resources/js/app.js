/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import HomePage from './components/pages/homepage/homepage';
import Header from './components/header/header';
import SignIn from './components/pages/sign-in-page/sign-in-page';
import SignUp from './components/pages/sign-up-page/sign-up-page';
import Welcome from './components/pages/welcome/welcome-page';
require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// const routes = (
//
//
//                 <Route exact path={base_url} component={HomePage} />
//                 {/*<Route path="/browse_events"/>*/}
//
//                 {/*<Route path="/create_events"/>*/}
//
//                 {/*<Route  path={base_url+'/sign_in'} component={SignIn}/>*/}
//
//    )

if (document.getElementById('homepage')){
    render(<Router>
            <Route exact path={base_url} component={HomePage} />
        </Router>,document.getElementById('homepage')
    );
}
else {
    render(
        <Router >
            <Route exact={true} path="/" component={Welcome} />
        </Router>,
        document.getElementById('welcome')
    );
}