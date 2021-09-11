import React, {useEffect, useState} from 'react';
import HeaderAdmin from '../../layout/Header_admin';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';

export default function Home(){

    const [ productControlData , setProductControlData ] = useState([]);
    
    let process = require('../../../db/myProcess.json');
  
    useEffect(()=>{
        fetch(`http://localhost:3005/productcontrol`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProductControlData(data);
            console.log(data);
        });
    },[process.IP, process.PORT]);
    
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
            <h3>상품 수정 및 삭제</h3>
            <div>상품을 수정 및 삭제할 수 있습니다.</div>
        </div>
        <Link to="/productmodify">
                <button type="button" class="btn btn-color-orange admin-submit">상품 수정/삭제</button>
        </Link>
        </div>
        
</div>
        <Footer/>
      </div>

    );
}