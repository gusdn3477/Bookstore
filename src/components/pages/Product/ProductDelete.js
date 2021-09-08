import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router";

export default function SignUp() {

    const gogo = useHistory();

    const [usersDatas, setUsersDatas] = useState([]);

    const [values, setValues] = useState({
        userId: '',
        email: '',
        phone: '',
        name: '',
    })

    const [guideTxts, setGuideTxts] = useState({
        userGuide : '최대 20자 까지 가능합니다.',
        emailGuide : '이메일 형식에 맞게 작성해 주세요.',
        nameGuide : '',
        phoneGuide : '. 을 입력하지 말아 주세요.'
    });

    const [error, setError] = useState({
        userIdError: '',
        emailError: '',
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

      const onTextCheck = () => {
        let userIdError = "";
        let emailError = "";
        let nameError = "";
        let phoneError = "";
        
    
        if (!isUserId(values.userId)) userIdError = "아이디 형식을 확인 해 주세요.( 한글 불가 )";
        if (!isEmail(values.email)) emailError = "email 형식이 아닙니다.";

        if (values.name.length === 0) nameError = "이름을 입력해주세요.";
    
        //console.log(userIdError, emailError, pwdError, confirmPwd, nameError, phoneError, userTypesError, useConfirmError)
        setError({
          userIdError, emailError, nameError, phoneError
        })
    
        if (userIdError || emailError || nameError || phoneError ) return false;
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
            fetch(`/user-service/users`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email : values.email,
                    pwd : values.password,
                    name : values.name
                    // id : usersDatas.length + 1,
                    // userId: values.userId,
                    // name: values.name
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

        <div className="card-body">
            <div className="myaccount-info-wrapper">
            <form  onSubmit={handlePutUserLists}>
                <div className="account-info-wrapper">
                    <h4>상품 등록</h4>
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

                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>Confirm Pass</label>
                            <input 
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChangeForm}
                            />
                        </div>
                    </div>

                    {
                        error.confirmPwd
                            ? 
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.confirmPwd}</div>
                            :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.confirmPwdGuide}</div>
                    }
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>Email</label>
                            <input 
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChangeForm}
                            />
                        </div>
                    </div>
                    {
                        error.emailError
                            ? 
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.emailError}</div>
                            :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.emailGuide}</div>
                    }
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>Name</label>
                            <input 
                                type="text"
                                name="name"
                                value={values.name}
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
                            <label>Phone</label>
                            <input 
                                type="tel"
                                name="phone"
                                value={values.phone}
                                onChange={handleChangeForm}
                            />
                        </div>
                    </div>
                    {
                        error.phoneError
                            ? 
                                <div style={{ color: "red", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{error.phoneError}</div>
                            :
                                <div style={{ color: "gray", fontSize: "10px", margin: '-5px 0 10px 15px' }}>{guideTxts.phoneGuide}</div>
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
    );

}