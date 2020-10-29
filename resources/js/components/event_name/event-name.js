/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
const EventByName =({placeholder,handlechange})=> (
    <div>
        <input
               type='search'
               placeholder = {placeholder}
               onChange = {handlechange}/>
        <i class="fas fa-search"></i>
    </div>

)

export default EventByName;