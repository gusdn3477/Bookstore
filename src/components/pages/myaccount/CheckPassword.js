import { useHistory } from "react-router";
import { useState } from "react";
export default function ChangePassword(){

    const gogo = useHistory();

    const [usersDatas, setUsersDatas] = useState([]);

    const [values, setValues] = useState({
        password: '',
        confirmPassword: ''
    })

    const [guideTxts, setGuideTxts] = useState({
        pwdGuide : '숫자와 문자를 조합해서 최소 8글자는 입력해 주세요.',
        confirmPwdGuide : '한번더 입력해 주세요.'
    });

    const [error, setError] = useState({
        pwdError: '',
        confirmPwd: ''
      })

    const isPwd = pass => {
        const pwdRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).*$/;
        return pwdRegex.test(pass);
    }

    const confirmPassword = (pass, confirmPass) => {
        return pass === confirmPass
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

        if (!valid) 
            alert("비밀번호를 확인해 주세요!");
            //console.error("retry");
        else {
            gogo.push('/myaccountchange');
            }
    }

    const onTextCheck = () => {
        let pwdError = "";
        let confirmPwd = "";
        
        if (!isPwd(values.password)) pwdError = "비밀번호 조건을 만족 할 수 없습니다.";
        if (!confirmPassword(values.password, values.confirmPassword)) confirmPwd = "비밀번호가 일치하지 않습니다.";

        //console.log(userIdError, emailError, pwdError, confirmPwd, nameError, phoneError, userTypesError, useConfirmError)
        setError({
            pwdError, confirmPwd
        })

        if (pwdError || confirmPwd) return false;
        return true;
    }

    return(
        <form  onSubmit={handlePutUserLists}>
            <div className="card-body">
            <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    <h4>비밀번호 확인</h4>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="billing-info">
                            <label>현재 비밀번호</label>
                            <input 
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChangeForm}
                            />
                        </div>
                    </div>
                <div className="col-lg-12 col-md-12">
                    <div className="billing-info">
                        <label>비밀번호 확인</label>
                        <input 
                            type="password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChangeForm}
                        />
                    </div>
                </div>
                </div>
                    <div className="billing-back-btn">
                        <div className="billing-btn">
                            <button type="submit" style={{marginRight:"10px"}}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );

}