import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";

export default function RegisterForm() {

    const gogo = useHistory();

    const [usersDatas, setUsersDatas] = useState([]);

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [guideTxts, setGuideTxts] = useState({
        emailGuide : '이메일 형식에 맞게 작성해 주세요.',
        pwdGuide : '숫자와 문자를 조합해서 최소 8글자는 입력해 주세요.'
    });

    const [error, setError] = useState({
        emailError: '',
        pwdError: ''
      })

  const isEmail = email => {
  const emailRegex = /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()¥[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; 

    return emailRegex.test(email);
  };

  const isPwd = pass => {
    const pwdRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).*$/;

    return pwdRegex.test(pass);
  }
  
      const onTextCheck = () => {
        let emailError = "";
        let pwdError = "";
    
        if (!isEmail(values.email)) emailError = "email 형식이 아닙니다.";
        if (!isPwd(values.password)) pwdError = "비밀번호 조건을 만족 할 수 없습니다.";
    
        setError({
          emailError, pwdError
        })
    
        if (emailError || pwdError ) return false;
        return true;
      }

    let process = require('../../../../db/myProcess.json');

    const handleChangeForm = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
    }

    const handlePutUserLists = (e) => {
        e.preventDefault();

        const valid = onTextCheck();
        console.log('토큰 잘 만들어졌나 보기(무시하셔도 됩니다)' + localStorage.getItem('token'));
        if (!valid) console.error("retry");

        else {
            fetch(`/user-service/login`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            })
            .then((res) => {
                if(res.headers.get('token')){
                    localStorage.setItem("token", res.headers.get('token'));
                    gogo.push("/");
                }
                else{
                    alert("로그인 정보를 확인하세요.");
                }
            })
            // .then(res => res.json())
            // .then((res) => {
            //     if(res.token){
            //         localStorage.setItem("token", res.token);
            //         gogo.push("/");
            //     }
            //     else{
            //         alert("로그인 정보를 확인하세요");
            //     }
            // }
            // )
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
                                            <h3 className="panel-title">로그인</h3>
                                        </button>
                                    </div>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="card-body">
            <div className="myaccount-info-wrapper">
            <form  onSubmit={handlePutUserLists}>
                <div className="account-info-wrapper">
                    <h4>아이디와 비밀번호를 입력해 주세요.</h4>
                </div>
                <div className="row">
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>email</label>
                            <input 
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChangeForm}
                                // placeholder="ID를 입력해 주세요."
                            />
                        </div>
                    </div>
                    {
                        error.emailError 
                            ? 
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.emailError}</div>
                            :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.userGuide}</div>
                    }

                    
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>Password</label>
                            <input 
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChangeForm}
                            />
                        </div>
                    </div>
                    {
                        error.pwdError 
                            ? 
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.pwdError}</div>
                            :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.pwdGuide}</div>
                    }

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