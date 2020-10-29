/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
const EventByCity =({placeholder,handlechange})=> (
    <div>
        <input
               type='search'
               placeholder = {placeholder}
               onChange = {handlechange}/>
        <i class="fa fa-map-marker" aria-hidden="true"></i>

    </div>

)

export default EventByCity;