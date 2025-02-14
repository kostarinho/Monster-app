import React from 'react';
import './card-list.css'
import {Card} from './card/card-comp';



export const CardList = props =>(
        <div className='card-list'>
    {
        props.monsters.map(monster => (
          <Card key= {monster.id} monster={monster} />
          ))}
    </div>
    );

