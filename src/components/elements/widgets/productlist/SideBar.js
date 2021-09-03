import React, {useEffect, useState} from "react";
import UseFetch from "../../../../hooks/UseFetch";
import SideCategoryList from "./SideCategoryList";




export default function SideBar({setCategoryName}){

    var process = require('../../../../db/myProcess.json');
    const [categoryList, setCategoryList] = useState([]);
    

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/category`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCategoryList(data);
            console.log(data);
        })
        
    },[process.IP, process.PORT]);
    



    return(
        <div className="col-lg-3 order-2 order-lg-1">
        <div className="sidebar-style mr-30">
            <div className="sidebar-widget">
                <h4 className="pro-sidebar-title">Search </h4>
                <div className="pro-sidebar-search mb-50 mt-25">
                    <form className="pro-sidebar-search-form" action="#">
                        <input type="text" placeholder="Search here..."/>
                        <button><i className="pe-7s-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="sidebar-widget">
                <h4 className="pro-sidebar-title">Categories </h4>
                <div className="sidebar-widget-list mt-30">
                    <ul>



{
          categoryList.map((item, idx) => (

            <SideCategoryList
             
            key = {idx}
            item ={item}
            setCategoryName = {setCategoryName}
            />

         )
        )
}


                    </ul>
                </div>
            </div>







            <div className="sidebar-widget mt-50">
                <h4 className="pro-sidebar-title">Color </h4>
                <div className="sidebar-widget-list mt-20">
                    <ul>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button><span className="checkmark"></span> All Colors </button>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button><span className="checkmark"></span> white </button>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button><span className="checkmark"></span> black </button>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button><span className="checkmark"></span> brown </button>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button><span className="checkmark"></span> blue </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-widget mt-40">
                <h4 className="pro-sidebar-title">Size </h4>
                <div className="sidebar-widget-list mt-20">
                    <ul>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button><span className="checkmark"></span> All Sizes </button>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button className="text-uppercase"> <span className="checkmark"></span>x </button>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button className="text-uppercase"> <span className="checkmark"></span>m </button>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button className="text-uppercase"> <span className="checkmark"></span>xl </button>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button className="text-uppercase"> <span className="checkmark"></span>xxl </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="sidebar-widget mt-50">
                <h4 className="pro-sidebar-title">Tag </h4>
                <div className="sidebar-widget-tag mt-25">
                    <ul>
                        <li><button>fashion</button></li>
                        <li><button>men</button></li>
                        <li><button>jacket</button></li>
                        <li><button>full sleeve</button></li>
                        <li><button>women</button></li>
                        <li><button>coat</button></li>
                        <li><button>top</button></li>
                        <li><button>sleeveless</button></li>
                        <li><button>electronics</button></li>
                        <li><button>furniture</button></li>
                        <li><button>plant</button></li>
                        <li><button>organic food</button></li>
                        <li><button>flower</button></li>
                        <li><button>book</button></li>
                        <li><button>cosmetics</button></li>
                        <li><button>accessories</button></li>
                        <li><button>handmade</button></li>
                        <li><button>kids</button></li>
                        <li><button>auto parts</button></li>
                        <li><button>cakes</button></li>
                        <li><button>pet food</button></li>
                        <li><button>medical</button></li>
                        <li><button>black friday</button></li>
                        <li><button>christmas</button></li>
                    </ul>
                </div>
            </div>


        </div>
    </div>
    );
}