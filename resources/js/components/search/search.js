/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';


const Search =({placeholder,handlechange})=> (
    <input className='search'
           type='search'
           placeholder = {placeholder}
           onChange = {handlechange}/>
)

export default Search;