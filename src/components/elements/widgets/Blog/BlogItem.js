import React, { useEffect, useState } from 'react';
//import BlogData from '../../../../db/blog.json';
import {Link} from 'react-router-dom';


export default function BlogItem(){

    const [ newBlog , setNewBlog] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3005/blog")
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setNewBlog(data);
        })
    },[])






    const blogList = newBlog.map(item => (
    
    <div class="col-12 col-md-4 mb-4">
        
        <Link to = {`/blogdetail/${item.id}` } >         
        <div className="blogImg" style ={{backgroundImage : `URL(${item.image})`, backgroundSize:"cover"}}></div>     
        </Link>


        <div className="blogTxt">
           <Link to ={`/blogdetail/${item.id}` } ><p className="blogTitle">{item.title}</p></Link>
            <Link to = {`/blogdetail/${item.authorUrl}`}><p className="blogAuth">{item.author}</p></Link>
        </div>

    </div>
    )).slice(0,3);


    return(
        <div className = "row mt-5">
            {blogList}
        </div>
    );

}