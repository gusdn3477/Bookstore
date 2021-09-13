import { useEffect, useState } from "react";

export default function AddressEdit({id, data}){

    return(
        <div className="myaccount-info-wrapper">
            <div className="account-info-wrapper">
                <h4>주문내역</h4>
            </div>
            <div className="entries-wrapper">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="entries-info text-center">
                            <p>상품 번호 : {data.productId}</p>
                            <p>구매 갯수 : {data.qty}</p>
                            <p>총 가격 : {data.totalPrice}</p>
                            <p>구매 날짜 : {data.createdAt}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="entries-edit-delete text-center">
                            <button className="edit">Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}