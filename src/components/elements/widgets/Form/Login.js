import React, {useEffect, useState} from 'react';
import TestListView from '../../ui/TestListView';

export default function TestTable() {

    const [cartDatas, setCartDatas] = useState([]);

    let process = require('../../../../db/myProcess.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/cart`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCartDatas(data);
        });
    },[process.IP, process.PORT]);

    return(
        <div class="login-form">
    <form method="POST" id="user-login" action="/loginProcessForUser" onsubmit="return checkInput(this)">
        <div class="mb-3">
            <h3>사용자 로그인</h3>
            <label for="exampleInputId1" class="form-label">학번</label>
            <input type="text" class="form-control" name="userId" id="userId"/>
            <div id="idHelp1" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">비밀번호</label>
            <input type="password" class="form-control" name="userPassword" id="userPassword"/>
            <div id="pwdHelp1" class="form-text"></div>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">로그인 유지하기</label>
        </div>
        <button type="submit" class="btn btn-color-orange user-submit" id="user-login">로그인</button>
        <div id="forgotPwd"><a href="#" class="form-text">비밀번호를 잊으셨나요?</a></div>
    </form>
</div>
    );
}