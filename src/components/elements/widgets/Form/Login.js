import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export default function TestTable() {

    const [cartDatas, setCartDatas] = useState([]);

    let process = require('../../../../db/myProcess.json');

    return(
        <div>
        <div style={{textAlign:"center"}}>회원가입</div>
        <div className="login-form">
    <form method="POST" id="user-login" action="/loginProcessForUser" onsubmit="return checkInput(this)">
        <div className="mb-3">
            <h3>사용자 로그인</h3>
            <label for="exampleInputId1" className="formLabel">학번</label>
            <input type="text" className="formControl" name="userId" id="userId"/>
            <div id="idHelp1" className="formText"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="formLabel">비밀번호</label>
            <input type="password" className="formControl" name="userPassword" id="userPassword"/>
            <div id="pwdHelp1" className="form-text"></div>
        </div>
        <div className="mb-3 formCheck">
            <input type="checkbox" className="formCheckInput" id="exampleCheck1"/>
            <label className="formCheckLabel" for="exampleCheck1">로그인 유지하기</label>
        </div>
        <Link to="/"><button type="submit" className="btn btn-lg btn-primary user-submit" id="user-login">로그인</button></Link>
        <div id="forgotPwd"><a href="#" className="formText">비밀번호를 잊으셨나요?</a></div>
    </form>
</div></div>
    );
}