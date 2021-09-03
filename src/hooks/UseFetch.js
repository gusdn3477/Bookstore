import React, { Fragment, useState, useEffect } from 'react';

export default function UseFetch({url}){

    let process = require('../db/myProcess.json');

    const [newData, setnewData] = useState([]);

    console.log(newData);

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/${url}}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setnewData(data);
            console.log(data);
        })
        
    },[process.IP, process.PORT, url]);

    return newData;
};