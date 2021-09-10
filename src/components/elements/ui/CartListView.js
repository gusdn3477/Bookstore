import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export default function CartListView({data, setCartDatas}) {

    const [count, setCount] = useState(data.qty);

    const handleCountAdd = () => {
        setCount(count+1);
    }

    const handleCountDec = () => {
        count > 1 ? setCount(count-1) : alert("최소 수량은 1개 입니다.")
    }

    let process = require('../../../db/myProcess.json');

    const handleDelete = (id) => {

        fetch(`http://${process.IP}:${process.PORT}/cart/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제 되었습니다!"),
            fetch(`http://${process.IP}:${process.PORT}/cart`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCartDatas(data);
            })
        )
       
    }

    return(
        <tr>
            <td className="product-thumbnail">
                <Link to={`/productdetail/${data.id}`}><img className="img-fluid" src="" alt=""/></Link>
            </td>
            <td className="product-name">
                <a href="/product/2">{data.name}</a>
            </td>
            <td className="product-price-cart">
                <span className="amount old">{(data.price * ((100+data.discount)/100)).toFixed(2)}</span>
                <span className="amount">{data.price}</span>
            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <button className="dec qtybutton" onClick={()=>handleCountDec()}>-</button>
                    <input className="cart-plus-minus-box" type="text" readonly="" value={count} />
                    <button className="inc qtybutton" onClick={()=>handleCountAdd()}>+</button>
                </div>
            </td>
            <td className="product-subtotal">{(data.price * count).toFixed(2)}</td>
            <td className="product-remove"><button onClick={()=>handleDelete(data.id)}><i className="fa fa-times"></i></button></td>
        </tr>

    );
}