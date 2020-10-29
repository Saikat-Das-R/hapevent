/**
 * Created by Saikat on 22-Oct-20.
 */
import React,{Component} from 'react';
import backImage from '../../img/happ_header.jpg'
import EventByName from '../event_name/event-name';
import EventByCity from '../event_city/event-city';
import EventByDate from '../event_date/event-date';
import './find_event.css';

export default class FindEvent extends Component{
    constructor(){
        super();
        this.state = {
            eventName:[],
            city:[],
            date:[],
            searchField:''
        }
    }

    render(){
        return(
            <div >

                <img src={backImage}/>
                <div className="find-event">
                    <p>Find the event you are looking for</p>
                    <div className="find-options">
                        <EventByName placeholder={'Event Name/Venue'}
                                     handlechange={(e) => this.setState({searchField: e.target.value})} />
                        <EventByCity placeholder={'City'}
                                     handlechange={(e) => this.setState({searchField: e.target.value})} />
                        <EventByDate placeholder={'Date'}
                                     handlechange={(e) => this.setState({searchField: e.target.value})} />
                    </div>
                </div>

            </div>
        )
    }
}