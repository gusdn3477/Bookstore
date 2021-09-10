import React, {useEffect, useState} from 'react';
import UserListView from './UserListView';

export default function UserListForm() {

    const [userDatas, setUserDatas] = useState([]);
    const myHeaders = new Headers();
    let token = "Bearer " + localStorage.getItem("token");
    myHeaders.append("Authorization", token)
    let process = require('../../../db/myProcess.json');

    //추후에 orders 테이블로 바꿔야 함
    useEffect(()=>{
        fetch(`/user-service/users`,{
            "headers": myHeaders
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            setUserDatas(data);
        });
    },[process.IP, process.PORT]);
    return(
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">사용자 내역입니다.</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>이름</th>
                                        <th>이메일</th>
                                        <th>연락처</th>
                                        <th>주소</th>
                                        <th>가입 날짜</th>
                                        <th>회원 삭제</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userDatas.map(item => (
                                            <UserListView
                                                key = {item.id}
                                                data = {item}
                                                setCartDatas = {setUserDatas}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}