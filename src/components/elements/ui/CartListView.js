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

    const handleDelete = (id) => {

        fetch(`/cart-service/${localStorage.getItem('userId')}/carts`,{
            method: "DELETE"
        }).then(
            alert("삭제 되었습니다!"),
            fetch(`/cart-service/${localStorage.getItem('userId')}/carts`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCartDatas(data);
            })
        )
    }

    const buy = (id) => {
        fetch(`/order-service/${localStorage.getItem('userId')}/orders`,{
            method: "DELETE"
        }).then(
            alert("삭제 되었습니다!"),
            fetch(`/cart-service/${localStorage.getItem('userId')}/carts`)
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
                <Link to={`/productdetail/${data.productId}`}><img className="img-fluid" src="" alt=""/></Link>
            </td>
            <td className="product-name">
                <Link to={`/productdetail/${data.productId}`}>{data.productName}</Link>
            </td>
            <td className="product-price-cart">
                <span className="amount">{data.unitPrice}</span>
            </td>
            {/*}
            <td className="product-price-cart">
                <span className="amount">{data.stock}</span>
            </td>
            <td className="product-subtotal">{data.createdAt}</td>
            */}
            <td className="product-remove">
                <Link to={`/buy/${data.productId}`}>구매하기!
                </Link>
            </td>
            <td className="product-remove"><button onClick={()=>handleDelete(data.id)}><i className="fa fa-times"></i></button></td>
        </tr>

    );
}