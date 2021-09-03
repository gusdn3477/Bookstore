import React, { Fragment, useState } from 'react';
import data from '../db/dummy.json';

export default function DataView(){
    const day = 1;
    const [newData, setNewData] = useState(data);
    console.log(newData);
    const searchData = newData.words.filter( word => word.day === day );
    
    return(
        <Fragment>
        <ul>
            {
                newData.days.map(item => (
                <li key={item.id}>Day : {item.day} Id : {item.id}</li>
                ))
            }
        </ul>
        <table>
            {
                searchData.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))
            }
        </table>
        </Fragment>
    );
}