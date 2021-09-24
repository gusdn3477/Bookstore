import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export default function UserListView({data, setUserDatas}) {

    const handleDelete = (id) => {
        //확실하지 않음
        fetch(`user-service/users/${data.userId}`,{
            method: "DELETE"
        }).then(
            alert("삭제 되었습니다!"),
            fetch(`user-service/users`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setUserDatas(data);
            })
        )
    }

    return(
        <tr>
        <td className="product-price-cart">
            <Link to={`/catalog/${data.name}`}><span className="name">{data.name}</span></Link>
        </td>
        <td className="product-price-cart">
            <span className="orderid">{data.email}</span>
        </td>
        <td className="product-price-cart">
            <span className="amount">{data.phone}</span>
        </td>
        <td className="product-price-cart">
            <span className="amount">{data.address}</span>
        </td>
        <td className="product-price-cart">
            <span className="amount">{(data.createdAt).substring(0,10)}</span>
        </td>
        <td className="product-remove"><button onClick={()=>handleDelete(data.id)}><i className="fa fa-times"></i></button></td>
        {/*
        <td className="product-remove"><button onClick={()=>handleDelete(data.id)}><i className="fa fa-times"></i></button></td>
        */}
    </tr>
                

                    
    );
}