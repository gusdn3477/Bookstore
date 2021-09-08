import React, { useEffect, useState} from 'react';
//import BrandData from '../../../../db/nav.json';


export default function Brand(){

    /* 현재 단계에서 사용 X */
    const [ newBrand, setNewBrand ] = useState([]);
    let process = require('../../../../db/myProcess.json');

    useEffect(() => {
        fetch(`http://localhost:3005/brand`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setNewBrand(data);
        })

    },[]);


    const brandList = newBrand.map(item => (

        <div className="col-12 col-md-3">
            <div className="row">
                 <div className="col-12 col-sm-4 brandImg"><i className= {item.img}></i></div>
                     <div className="col-12 col-sm-auto">
                     <p className="brandTitle">{item.name}</p>
                     <p className="brandTxt">{item.content}</p>
                </div>
            </div>
        </div> 

    )).slice(0,4);

    return(
        <section id="brand">
            <div className="container">
                <div className="row">
                    
                 {brandList}

                </div> 
            </div> 
        </section> 
    );
}