import React from 'react';
import HeaderAdmin from '../../../components/layout/Header_admin';
import Deal from '../../../components/pages/deal/Deal';
import Brand from '../../../components/elements/widgets/brand/Brand';
import Blog from '../Blog/Blog';
import Footer from '../../layout/Footer';
import Banner from '../../elements/ui/Banner';
import { Link } from 'react-router-dom';

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
        <Link to="/productmake">
                <button type="button" class="btn btn-color-orange admin-submit">상품 등록</button>
        </Link>
        </div>

        <div className="login-form">
            <div className="mb-3">
            <h3>상품 수정</h3>
            <div>상품을 수정할 수 있습니다.</div>
        </div>
        <Link to="/productmake">
                <button type="button" class="btn btn-color-orange admin-submit">상품 수정</button>
        </Link>
        </div>

        <div className="login-form">
            <div className="mb-3">
            <h3>상품 삭제</h3>
            <div>상품을 삭제할 수 있습니다.</div>
        </div>
        <Link to="/productmake">
                <button type="button" class="btn btn-color-orange admin-submit">상품 삭제</button>
        </Link>
        </div>
        
</div>
        <Footer/>
      </div>

    );
}