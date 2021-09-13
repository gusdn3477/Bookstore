import React, { useEffect, useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import { Link } from 'react-router-dom';
import AdminMenuList from './AdminMenuList';

export default function Admin(){

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

    return(
        <div id="wrap">
            <Header/>
                <Bread breadName ="ADMIN" />
                    <AdminMenuList data={newAdminMenu}/>
            <Footer/>
        </div>
    );
}