/**
 * Created by Saikat on 22-Oct-20.
 */
import React,{Component} from 'react';
import './card.css';
import logo from '../../img/happe_logo.png';
export const Card = props =>{
    return(
        <div className = 'card-container'>

            <div className = 'card-div' >
                <div>
                    <div className="card-content">
                        <div className="card-date">
                            <p id="month_name">OCT</p>
                            <p id="day">10</p>
                        </div>

                        <div className="card-date">
                            <div id="bar">
                            </div>
                            <div id="content">
                                <p id="title">Title</p>
                                <p id="location">Location</p>
                            </div>

                        </div>
                        <div className="card-date">
                            <div className="event-amount">
                                <p id="sign">$</p>
                                <p id="amount">5</p>
                            </div>

                        </div>
                    </div>
                    <p id="time">Friday October 10 02:00 pm</p>
                </div>
            </div>
            {/*<img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>*/}
            {/*<h2>{props.monster.name}</h2>*/}
            {/*<p>{props.monster.email}</p>*/}
        </div>
    )
}