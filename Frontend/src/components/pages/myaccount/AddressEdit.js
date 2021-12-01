import { useEffect, useState } from "react";

export default function AddressEdit({id, data}){

    return(
            <div className="entries-wrapper">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="entries-info text-center">
                            <p>상품 번호 : {data.productId}</p>
                            <p>상품 이름 : {data.productName}</p>
                            <p>구매 갯수 : {data.qty}</p>
                            <p>총 가격 : {data.totalPrice}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="entries-info text-center">
                            <p>구매 날짜 : {(data.createdAt).substring(0,10)}</p>
                        </div>
                    </div>
                    {/*}
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <div className="entries-edit-delete text-center">
                            <button className="edit">Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                    */}
                </div>
            </div>
    );
}