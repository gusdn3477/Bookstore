import React, { useEffect, useState } from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import { Link } from 'react-router-dom';

export default function AdminMenuList(){

    const [ newAdminMenu , setNewAdminMenu] = useState([]);
    let proceess = require('../../../db/myProcess.json');

    useEffect(() => {
        fetch(`http://localhost:3005/adminmenu`)
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setNewAdminMenu(data);
        })
    },[]);

    const adminMenuList = newAdminMenu.map((item, idx) => (
        <div className="login-form" key={idx}>
            <div className="mb-3">
                <h3>{item.name}</h3>
                <div>{item.description}</div>
            </div>
            <Link to={item.url}>
                <button type="button" class="btn btn-color-orange admin-submit">{item.name}</button>
            </Link>
        </div>));

    return(
        <div class="Container">
            {adminMenuList}    
        </div>
    );
}