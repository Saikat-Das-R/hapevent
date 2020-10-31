/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
import './header.css'
import Search from '../../components/search/search';
import logo from '../../img/happe_logo.png';

import {
    Link
} from "react-router-dom";


const Header =()=> (

    <div>
        <div>
            <Link to="/"><img src={logo}/></Link>
            <Search placeholder={'Search Events'}
                    handlechange={(e) => this.setState({searchField: e.target.value})}/>

            <nav>
                <ul>
                    <li>
                        <Link to='/browse_events' >Browse Events</Link>
                    </li>
                    <li>
                        <Link to="/create_events"><i class="fas fa-plus"></i> Create Events</Link>
                    </li>
                    <li>
                        <Link to='/sign_in' >SignIn/SignUp</Link>
                    </li>
                </ul>
            </nav>
        </div>

    </div>



);

export default Header;



