import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export default function TestTable() {

    const [cartDatas, setCartDatas] = useState([]);

    let process = require('../../../../db/myProcess.json');

    return(
        <div>
            <div style={{textAlign:"center"}}>회원가입</div>
        <div className="mb-3">
    <label for="registerId" className="form-label">학번</label>
    <input type="text" className="formControl" name="id" id="registerId"/>
</div>
<div className="mb-3">
    <label for="registerName" className="formLabel">이름</label>
    <input type="text" className="formControl" name="name" id="registerName" aria-describedby="emailHelp"/>
</div>
<div className="mb-3">
    <label for="registerEmail" className="formLabel">이메일</label>
    <div className="row mb-3" style={{margin:0}}>
        <input type="text" className="formControl col" name="email" id="registerEmail" aria-describedby="emailHelp"/>
        <label className="form-text col-6" style={{margin:"0", fontSize:"20px"}}>@sju.ac.kr</label>
    </div>
    <button type="button" className="btn btn-outline-orange">인증하기</button>
</div>
<div className="mb-3">
    <label for="registerPhone" className="formLabel">전화번호</label>
    <input type="text" className="formControl" name="phonenum" id="registerPhone" placeholder="- 없이 입력해주세요."/>
</div>
<div className="mb-3">
    <label for="exampleInputPassword1" className="formLabel">비밀번호</label>
    <label id="passwordHelp1" className="formText">8자 이상 입력</label>
    <input type="password" className="formControl" name="password" id="password1"
        onkeyup="checkPassword(); checkPasswordAgain()"/>
</div>
<div className="mb-3">
    <label for="exampleInputPassword1" className="formLabel">비밀번호 확인</label>
    {/*<label id="passwordHelp2" class="form-text" style="{{color: green; display:none}};">동일합니다</label>
    <label id="passwordHelp3" class="form-text" style="color: red; display:none;">동일하지 않습니다</label>
    <input type="password" class="form-control" id="password2" onkeyup="checkPasswordAgain()"/>
    */}
</div>
<Link to="/"><button type="submit" className="btn btn-lg btn-primary">가입하기</button></Link>
</div>
    );
}