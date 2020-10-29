/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
import './cardlist.css';
import { Card } from '../card/card'
export const CardList = props =>{
    return(
        <div className='card-list'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            {/*{props.monster.map(monster => <Card key = {monster.id} monster = {monster}/>)}*/}
        </div>
    )
}
