import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router";

export default function BuyForm({id}) {

    const gogo = useHistory();

    const [values, setValues] = useState({
        productId: '',
        productName: '',
        unitPrice: '',
        stock: '',
        image: '',
        writer: '',
    })

      const handlePutOrderList = () => {

        fetch(`/order-service/${localStorage.getItem('userId')}/orders`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productId: values.productId,
                qty : values.stock,
                unitPrice : values.unitPrice
            }),
        }).
        then(
            alert("주문 성공!")
        )
    }

    useEffect(()=>{
        fetch(`/catalog-service/catalogs/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setValues(data);
        });
    },[]);

    const handleChangeForm = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
    }

    return(
        <div className="myaccount-area pb-80 pt-100">
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-lg-9">
                        <div className="myaccount-wrapper">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item single-my-account mb-20 card">
                                    <div className="panel-heading card-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            <h3 className="panel-title">주문하기</h3>
                                        </button>
                                    </div>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="card-body">
                                        <div className="myaccount-info-wrapper">
                                        <form  onSubmit={handlePutOrderList}>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="billing-info">
                                                        <label>상품Id</label>
                                                        <input 
                                                            type="text"
                                                            name="productId"
                                                            value={values.productId}
                                                            readOnly
                                                            // placeholder="ID를 입력해 주세요."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="billing-info">
                                                        <label>상품이름</label>
                                                        <input 
                                                            type="text"
                                                            name="productName"
                                                            value={values.productName}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="billing-info">
                                                        <label>단위 가격</label>
                                                        <input 
                                                            type="text"
                                                            name="unitPrice"
                                                            value={values.unitPrice}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="billing-info">
                                                        <label>구매 갯수</label>
                                                        <input 
                                                            type="text"
                                                            name="stock"
                                                            value={values.stock}
                                                            readOnly
                                                        />
                                                    </div>
                                                    </div>
                                            </div>
                                            
                                            <div className="billing-back-btn">
                                                <div className="billing-btn">
                                                    <button type="submit">구매</button>
                                                </div>
                                            </div>
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}