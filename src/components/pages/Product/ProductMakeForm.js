import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";

export default function RegisterForm() {

    const gogo = useHistory();

    const [usersDatas, setUsersDatas] = useState([]);

    const [values, setValues] = useState({
        ISBN : '',
        productName : '',
        stock : '',
        unitPrice : '',
        createdAt : '',
        image : '',
        writer : '',
    })

    const [guideTxts, setGuideTxts] = useState({
        ISBN : '',
        productName : '',
        stock : '',
        unitPrice : '',
        createdAt : '',
        image : '',
        writer : '',
        userGuide : '최대 20자 까지 가능합니다.',
        emailGuide : '이메일 형식에 맞게 작성해 주세요.',
        pwdGuide : '숫자와 문자를 조합해서 최소 8글자는 입력해 주세요.'
    });

    const [error, setError] = useState({
        ISBN : '',
        productName : '',
        stock : '',
        unitPrice : '',
        createdAt : '',
        image : '',
        writer : '',
        userIdError: '',
        emailError: '',
        pwdError: ''
      })

  
      const onTextCheck = () => {
        let emailError = "";
        let pwdError = "";
    
        setError({
          emailError, pwdError
        })
    
        if (emailError || pwdError ) return false;
        return true;
      }

    const handleChangeForm = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
    }

    const handlePutUserLists = (e) => {
        e.preventDefault();

        const valid = onTextCheck();

        if (!valid) console.error("retry");

        else {
        
            fetch(`/catalogs-service/catalogs`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id : usersDatas.length + 1,
                    email: values.email,
                    password: values.password
                }),
            })
            .then(res => res.json())
            .then((res) => {
                if(res.token){
                    localStorage.setItem("token", res.token);
                    gogo.push("/");
                }
                else{
                    alert("로그인 정보를 확인하세요");
                }
            }
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
                                            <h3 className="panel-title">상품 등록</h3>
                                        </button>
                                    </div>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="card-body">
            <div className="myaccount-info-wrapper">
            <form  onSubmit={handlePutUserLists}>
                <div className="account-info-wrapper">
                    <h4>등록할 상품의 정보를 입력해 주세요.</h4>
                </div>
                <div className="row">
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>상품 제목</label>
                            <input 
                                type="text"
                                name="productName"
                                value={values.productName}
                                onChange={handleChangeForm}
                                // placeholder="ID를 입력해 주세요."
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>ISBN</label>
                            <input 
                                type="text"
                                name="ISBN"
                                value={values.ISBN}
                                onChange={handleChangeForm}
                                // placeholder="ID를 입력해 주세요."
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>재고</label>
                            <input 
                                type="text"
                                name="stock"
                                value={values.stock}
                                onChange={handleChangeForm}
                                // placeholder="ID를 입력해 주세요."
                            />
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>가격</label>
                            <input 
                                type="text"
                                name="unitPrice"
                                value={values.unitPrice}
                                onChange={handleChangeForm}
                                // placeholder="ID를 입력해 주세요."
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>작가</label>
                            <input 
                                type="text"
                                name="writer"
                                value={values.writer}
                                onChange={handleChangeForm}
                                // placeholder="ID를 입력해 주세요."
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>이미지</label> {/* 타입 변경 요먕 */}
                            <input 
                                type="text"
                                name="image"
                                value={values.image}
                                onChange={handleChangeForm}
                                // placeholder="ID를 입력해 주세요."
                            />
                        </div>
                    </div>

                </div>
                
                <div className="billing-back-btn">
                    <div className="billing-btn">
                        <button type="submit">등록</button>
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