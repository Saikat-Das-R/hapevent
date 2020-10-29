/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
import './footer.css';
import card from '../../img/credit-cards.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
const Footer =()=>(
    <div className="footer">
        <Router>
            <div className="footer-cols">

                <ul>
                    <li>
                        <Link to="#">Follow us</Link>
                    </li>
                    <li>
                        <Link to="/create_events">Facebook</Link>
                    </li>
                    <li>
                        <Link to="/sign_sign_up">Instagram</Link>
                    </li>
                    <li>
                        <Link to="/sign_sign_up">What's App</Link>
                    </li>
                    </ul>
                <ul>
                    <li>
                        <Link to="/about_us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/terms">Terms of services</Link>
                    </li>
                    <li>
                        <Link to="/privacy">Privacy policy</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/attend_event">Attend event</Link>
                    </li>
                    <li>
                        <Link to="/become_host">Become a host</Link>
                    </li>
                    <img src={card}/>
                </ul>
                <ul>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/sitee_map">Sitemap</Link>
                    </li>
                    <li>
                        <Link to="/career">Careers</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact={true} path="/browse_events"/>


                    <Route exact={true} path="/create_events"/>


                    <Route exact={true} path="/sign-in.js"/>


                </Switch>
            </div>

        </Router>
    </div>
);

export default Footer;