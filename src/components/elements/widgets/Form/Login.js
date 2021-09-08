import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";

export default function LoginForm() {

    const gogo = useHistory();

    const [usersDatas, setUsersDatas] = useState([]);

    const [values, setValues] = useState({
        userId: '',
        email: '',
        password: '',
        phone: '',
        name: '',
    })

    const [guideTxts, setGuideTxts] = useState({
        userGuide : '최대 20자 까지 가능합니다.',
        emailGuide : '이메일 형식에 맞게 작성해 주세요.',
        pwdGuide : '숫자와 문자를 조합해서 최소 8글자는 입력해 주세요.',
        nameGuide : '',
        phoneGuide : '. 을 입력하지 말아 주세요.'
    });

    const [error, setError] = useState({
        userIdError: '',
        emailError: '',
        pwdError: '',
        nameError: '',
        phoneError: ''
      })



  const isUserId = userId => {
    const userIdRegex = /^[a-z0-9_!@$%^&*-+=?"]{1,20}$/
    return userIdRegex.test(userId);
  }

  const isEmail = email => {
  const emailRegex = /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()¥[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; 

    return emailRegex.test(email);
  };

  const isPwd = pass => {
    const pwdRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).*$/;

    return pwdRegex.test(pass);
  }
  
  const isPhone = phone => {
    const phoneRegex = /^[0-9\b -]{0,13}$/;
    return phoneRegex.test(phone)
  }

      const onTextCheck = () => {
        let userIdError = "";
        let pwdError = "";
        
    
        if (!isUserId(values.userId)) userIdError = "아이디 형식을 확인 해 주세요.( 한글 불가 )";
        if (!isPwd(values.password)) pwdError = "비밀번호 조건을 만족 할 수 없습니다.";
        if (values.userId === values.password) pwdError = "아이디를 비밀번호로 사용 할 수 없습니다.";
    
        //console.log(userIdError, emailError, pwdError, confirmPwd, nameError, phoneError, userTypesError, useConfirmError)
        setError({
          userIdError, pwdError
        })
    
        if (userIdError || pwdError) return false;
        return true;
      }

    let process = require('../../../../db/myProcess.json');

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
        e.preventDefault();

        const valid = onTextCheck();

        if (!valid) console.error("retry");

        else {
        
            fetch(`http://${process.IP}:${process.PORT}/users`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id : usersDatas.length + 1,
                    userId: values.userId,
                    password: values.password
                }),
            }).
            then(res => res.json())
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
                            <label>Id</label>
                            <input 
                                type="text"
                                name="userId"
                                value={values.userId}
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