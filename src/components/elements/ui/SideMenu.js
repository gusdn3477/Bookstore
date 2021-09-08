//import menuData from "../../../db/nav.json";
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
export default function SideMenu() {
  
  const [menuData, setMenuData] = useState([]);

  useEffect(()=>{
      fetch(`http://localhost:3005/sidemenu`)
      .then(res => {
          return res.json();
      })
      .then(data => {
          setMenuData(data);
          console.log(data);
      });
  },[]);
  
  const menuList = menuData.map((item, index) => (
      <div className="same-style header-compare">
          <Link to = {item.url}><i className={item.name}></i><span className="count-style">{item.count}</span></Link>
      </div>
  ))

  return(
      
      <div className="col-xl-2 col-lg-2 col-md-6 col-8">
          
          <div className="header-right-wrap ">
              {menuList}
              <div className="same-style mobile-off-canvas d-block d-lg-none">
                  <button className="mobile-aside-button"><i className="las la-bars"></i></button>
              </div>
          </div>
      </div>
  );
}
