import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";

export default function RegisterForm() {

    const gogo = useHistory();

    const [usersDatas, setUsersDatas] = useState([]);

    const [values, setValues] = useState({
        ISBN : '',
        productName : '',
        stock : '',
        startDate : '',
        endDate : '',
        unitPrice : '',
        createdAt : '',
        image : '',
        writer : ''
    })

    const [guideTxts, setGuideTxts] = useState({
        ISBN : '',
        productName : '',
        stock : '',
        unitPrice : '',
        startDate : '',
        endDate : '',
        createdAt : '',
        image : '',
        writer : ''
    });

    const [error, setError] = useState({
        ISBN : '',
        productName : '',
        stock : '',
        unitPrice : '',
        startDate : '',
        endDate : '',
        createdAt : '',
        image : '',
        writer : ''
      })

      const onTextCheck = () => {
        let userIdError = "";
        let nameError = "";
        let startDate = '';
        let endDate = '';
        
        if (values.name.length === 0) nameError = "이름을 입력해주세요.";
    
        //console.log(userIdError, emailError, pwdError, confirmPwd, nameError, phoneError, userTypesError, useConfirmError)
        setError({
          userIdError, nameError
        })
    
        if (userIdError || nameError ) return false;
        return true;
      }

    let process = require('../../../db/myProcess.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/users`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setUsersDatas(data);
            console.log(data);
        });
    },[process.IP, process.PORT]);

    const handleChangeForm = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
    }

    const handlePutUserLists = (e) => {
        //alert(usersDatas.length);
        //console.log(values);
        e.preventDefault();

        const valid = onTextCheck();

        if (!valid) console.error("retry");

        else {
        
            fetch(`/catalog-service/catalogs`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id : usersDatas.length + 1,
                    userId: values.userId,
                    pwd: values.password,
                    name: values.name,
                    email: values.email,
                    phone: values.phone
                }),
            }).
            then(
                alert("success"),
                gogo.push('/')
                //window.location.href = '/'

            )
            }
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
                                            <h3 className="panel-title">상품 검색</h3>
                                        </button>
                                    </div>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="card-body">
            <div className="myaccount-info-wrapper">
            <form  onSubmit={handlePutUserLists}>
                <div className="account-info-wrapper">
                    <h4>형식에 맞춰 작성해 주시면 됩니다. (각 폼은 선택사항입니다.)</h4>
                </div>
                <div className="row">
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>제목으로 검색</label>
                            <input 
                                type="text"
                                name="productName"
                                value={values.productName}
                                onChange={handleChangeForm}
                                // placeholder="ID를 입력해 주세요."
                            />
                        </div>
                    </div>
                    {
                        error.userIdError 
                            ? 
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.userIdError}</div>
                            :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.userGuide}</div>
                    }
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>날짜로 검색(2021-02-05 식으로 입력)</label>
                            <div>검색 시작 날짜</div>
                            <input 
                                type="text"
                                name="startDate"
                                value={values.startDate}
                                onChange={handleChangeForm}
                            />
                            <div>검색 종료 날짜</div>
                            <input 
                                type="text"
                                name="endDate"
                                value={values.endDate}
                                onChange={handleChangeForm}
                            />
                        </div>
                    </div>
                    {
                        error.nameError 
                            ? 
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.nameError}</div>
                            :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.nameGuide}</div>
                    }

                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>작가 이름으로 검색</label>
                            <input 
                                type="text"
                                name="writer"
                                value={values.writer}
                                onChange={handleChangeForm}
                            />
                        </div>
                    </div>
                    {
                        error.nameError 
                            ? 
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.nameError}</div>
                            :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.nameGuide}</div>
                    }
                    
                </div>
                
                <div className="billing-back-btn">
                    <div className="billing-btn">
                        <button type="submit">검색하기</button>
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