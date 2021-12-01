//import menuData from "../../../db/nav.json";
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
export default function SideMenu() {
  
  const menuData = [
    {
      "id": 1,
      "name": "las la-search",
      "url": "/search",
      "count": 0,
      "auth" : "F"
    },
    {
      "id": 2,
      "name": "las la-user-circle",
      "url": "/myaccount",
      "count": 0,
      "auth" : "T"
    },
    {
      "id": 3,
      "name": "las la-shopping-bag",
      "url": "/cart",
      "count": 0,
      "auth" : "T"
    }
  ];
  
  const menuList = menuData.map((item, index) => (
      <div className="same-style header-compare">
          {
              localStorage.getItem('userId') ? <Link to = {item.url}><i className={item.name}></i><span className="count-style">{item.count}</span></Link> : ''
          }
      </div>
  ))

  return(
      
      <div className="col-xl-2 col-lg-2 col-md-6 col-8">
          
          <div className="header-right-wrap ">
            <div className="same-style header-compare">
                <Link to = '/search'><i className="las la-search"></i></Link>
            </div>
            <div className="same-style header-compare">
            {
              localStorage.getItem('userId') ? <Link to = '/myaccount'><i className="las la-user-circle"></i></Link> : ''
            }
            </div>
            <div className="same-style header-compare">
            {
              localStorage.getItem('userId') ? <Link to = '/cart'><i className="las la-shopping-bag"></i></Link> : ''
            }
            </div>
              <div className="same-style mobile-off-canvas d-block d-lg-none">
                  <button className="mobile-aside-button"><i className="las la-bars"></i></button>
              </div>
          </div>
      </div>
  );
}
