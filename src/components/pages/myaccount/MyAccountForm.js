import ChangePassword from "./ChangePassword";
import AddressEdit from "./AddressEdit";
import { useEffect, useState } from "react";

export default function MyAccountForm() {

    const [ usersDatas, setUsersDatas ] = useState([]);
    useEffect(()=>{
        fetch(`/order-service/${localStorage.getItem('userId')}/orders`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setUsersDatas(data);
            console.log(data);
        });
    },[]);

    return (
        <div className="myaccount-area pb-80 pt-100">
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-lg-9">
                        <div className="myaccount-wrapper">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item single-my-account mb-20 card">
                                    <div className="panel-heading card-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            <h3 className="panel-title"><span>1 .</span> 개인정보 수정</h3>
                                        </button>
                                    </div>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse hide" aria-labelledby="panelsStayOpen-headingTwo">
                                        <ChangePassword />
                                    </div>
                                </div>
                                <div className="accordion-item single-my-account mb-20 card">
                                    <div className="panel-heading card-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            <h3 className="panel-title"><span>2 .</span> 주문 확인 </h3>
                                        </button>
                                    </div>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse hide" aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="card-body">
                                            {
                                                usersDatas.map(item => (
                                                    <AddressEdit 
                                                        key = {item.id}
                                                        data = {item}/>
                                                ))
                                            }
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