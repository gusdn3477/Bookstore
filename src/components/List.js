import React , {useState} from 'react';
import data from '../db/data.json';

export default function List(){
    console.log(data);
    return (
        <ul>
            {data.days.map(day => (
                <li kye={day.id}>Day : {day.day}</li>
            ))}
        </ul>
    );
}