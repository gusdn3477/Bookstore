import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export default function UserListView({data, setUserDatas}) {

    let process = require('../../../db/myProcess.json');

    //지우고 새로고침 하는 부분 => 근데 삭제 필요 없다고 함
    const handleDelete = (id) => {
        //확실하지 않음
        fetch(`user-serivce/${data.userId}/orders`,{
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
        <td className="product-thumbnail">
            <Link to={`/catalog/${data.name}`}><img className="img-fluid" src="" alt=""/></Link>
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
            <span className="amount">{data.createdAt}</span>
        </td>
        <td className="product-remove"><button onClick={()=>handleDelete(data.id)}><i className="fa fa-times"></i></button></td>
        {/*
        <td className="product-remove"><button onClick={()=>handleDelete(data.id)}><i className="fa fa-times"></i></button></td>
        */}
    </tr>
                

                    
    );
}