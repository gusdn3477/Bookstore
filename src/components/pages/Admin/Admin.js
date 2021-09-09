import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import { Link } from 'react-router-dom';

export default function ADMIN(){
    return(
        <div id="wrap">
        <Header/>
        <Bread breadName ="ADMIN" />
        <div class="Container">
        <div className="login-form">
    <div className="mb-3">
        <h3>상품 관리</h3>
        <div>상품을 관리(등록, 수정, 삭제)할 수 있습니다.</div>
    </div>
    <Link to="/productcontrol">
        <button type="button" class="btn btn-color-orange admin-submit">상품 관리</button>
    </Link>
</div>

<div className="login-form">
    <div className="mb-3">
        <h3>거래내역 확인</h3>
        <div>현재까지 이뤄진 거래내역을 확인할 수 있습니다.</div>
    </div>
    <Link to="/orderlist">
        <button type="button" class="btn btn-color-orange admin-submit">거래내역 확인</button>
    </Link>
    </div>
        
</div>
        <Footer/>
      </div>

    );
}