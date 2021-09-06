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
        <div>
        <div class="mb-3">
    <label for="registerId" class="form-label">학번</label>
    <input type="text" class="form-control" name="id" id="registerId"/>
</div>
<div class="mb-3">
    <label for="registerName" class="form-label">이름</label>
    <input type="text" class="form-control" name="name" id="registerName" aria-describedby="emailHelp"/>
</div>
<div class="mb-3">
    <label for="registerEmail" class="form-label">이메일</label>
    <div class="row mb-3" style={{margin:0}}>
        <input type="text" class="form-control col" name="email" id="registerEmail" aria-describedby="emailHelp"/>
        <label class="form-text col-6" style={{margin:"0", fontSize:"20px"}}>@sju.ac.kr</label>
    </div>
    <button type="button" class="btn btn-outline-orange">인증하기</button>
</div>
<div class="mb-3">
    <label for="registerPhone" class="form-label">전화번호</label>
    <input type="text" class="form-control" name="phonenum" id="registerPhone" placeholder="- 없이 입력해주세요."/>
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">비밀번호</label>
    <label id="passwordHelp1" class="form-text">8자 이상 입력</label>
    <input type="password" class="form-control" name="password" id="password1"
        onkeyup="checkPassword(); checkPasswordAgain()"/>
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">비밀번호 확인</label>
    {/*<label id="passwordHelp2" class="form-text" style="{{color: green; display:none}};">동일합니다</label>
    <label id="passwordHelp3" class="form-text" style="color: red; display:none;">동일하지 않습니다</label>
    <input type="password" class="form-control" id="password2" onkeyup="checkPasswordAgain()"/>
    */}
</div>
</div>
    );
}