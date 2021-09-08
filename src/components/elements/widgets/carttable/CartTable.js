import React, {useEffect, useState} from 'react';
import CartListView from '../../ui/CartListView';
import CartTableFooter from './CartTableFooter';

export default function CartTable() {

    const [cartDatas, setCartDatas] = useState([]);

    let process = require('../../../../db/myProcess.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/cart`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCartDatas(data);
        });
    },[process.IP, process.PORT]);

    return(
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">장바구니</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Unit Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartDatas.map(item => (
                                            <CartListView
                                                key = {item.id}
                                                data = {item}
                                                setCartDatas = {setCartDatas}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-shiping-update-wrapper">
                            <div className="cart-shiping-update">
                                <a href="/shop-grid-standard">Continue Shopping</a>
                            </div>
                            <div className="cart-clear">
                                <button>Clear Shopping Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <CartTableFooter />
            </div>
        </div>
    );
}