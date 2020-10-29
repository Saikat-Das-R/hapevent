/**
 * Created by Saikat on 22-Oct-20.
 */
import React,{Component} from 'react';
import logo from '../../../img/happe_logo.png';

import SignIn from "../sign-in-page/sign-in-page";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Header from '../../header/header';

import {CardList} from '../../cardList/card-list'
import Footer from '../../footer/footer'
import FindEvent from "../../find_event/find-event";
import './homepage.css'


export default class HomePage extends Component{

    constructor(){
        super();
        this.state = {
            events:[],
            searchField:''
        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <header>
                        <Header />
                        <Switch>

                            <Route path="/browse_events"/>

                            <Route path="/create_events"/>

                            <Route path="/sign_sign_up" component={SignIn}/>

                        </Switch>
                    </header>
                </BrowserRouter>

                <section>
                    <FindEvent/>
                </section>
                <section className="upcoming-event">
                    <div className="upcoming-bar">
                        <p>Up Coming Events</p>
                    </div>
                    <CardList />
                </section>
                <section className="weekly-event">
                    <div className="weekly-event-bar">
                        <p>Events This Week</p>
                    </div>
                    <CardList />
                </section>
                <section className="section-work">

                    <div className='triangle-left'>
                        <p>How It Works</p>
                    </div>
                    <div className='triangle-right'>
                        <img src={logo} alt=""/>
                    </div>
                    {/*<div>*/}
                        {/*<img src={logo} alt=""/>*/}
                    {/*</div>*/}
                </section>
                <footer >
                    <Footer />
                </footer>
            </div>
        )
    }
}
