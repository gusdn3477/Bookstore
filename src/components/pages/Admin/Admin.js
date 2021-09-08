import React from 'react';
import HeaderAdmin from '../../../components/layout/Header_admin';
import Deal from '../../../components/pages/deal/Deal';
import Brand from '../../../components/elements/widgets/brand/Brand';
import Blog from '../Blog/Blog';
import Footer from '../../layout/Footer';
import Banner from '../../elements/ui/Banner';

export default function Home(){
    return(
        <div id="wrap">
        <HeaderAdmin/>

        <div class="Container">
        <div className="login-form">
    <div className="mb-3">
        <h3>상품 등록</h3>
        <div>상품을 등록할 수 있습니다.</div>
    </div>
    <button type="button" class="btn btn-color-orange admin-submit"
        onclick="location.href='/register_for_admin'">상품 등록</button>
</div>

<div className="login-form">
    <div className="mb-3">
        <h3>상품 조회</h3>
        <div>상품을 조회할 수 있습니다.</div>
    </div>
    <button type="button" class="btn btn-color-orange admin-submit"
        onclick="location.href='/register_for_admin'">상품 조회</button>
</div>



<div className="login-form">
    <div className="mb-3">
        <h3>결제내역 확인</h3>
        <div>결제내역을 확인할 수 있습니다.</div>
    </div>
    <button type="button" class="btn btn-color-orange admin-submit"
        onclick="location.href='/register_for_admin'">결제내역 확인</button>
    </div>
        
</div>
        <Footer/>
      </div>

    );
}