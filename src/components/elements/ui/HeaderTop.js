import { Link } from "react-router-dom";
export default function HeaderTop(){

    return(
        <div className="header-padding-1 d-none d-lg-block header-top-area">
        <div className="container-fluid">

            <div className="header-top-wap">

                <div className="language-currency-wrap">

                    <div className="same-language-currency language-style">
                        <span>3조 책방 <i className="fa fa-angle-down"></i></span>
                        <div className="lang-car-dropdown">
                            <ul>
                                <li><button value="en">권진희</button></li>
                                <li><button value="fn">김영모</button></li>
                                <li><button value="de">박현우</button></li>
                                <li><button value="de">윤희상</button></li>
                            </ul>
                        </div>
                    </div>

                    <div className="header-offer">
                        <p>9월 15일까지 배송비 <span>무료!</span></p>
                    </div>
                </div>
                <div>
                    <Link to="/login"><button type="button" class="btn btn-primary admin-submit">로그인</button></Link>
                    <Link to="/register"><button type="button" class="btn btn-primary admin-submit">회원가입</button></Link>
                    <Link to="/logout"><button type="button" class="btn btn-primary admin-submit">로그아웃</button></Link>
                </div>
            </div>
            
        </div>
    </div>

    );

}