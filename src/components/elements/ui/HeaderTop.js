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
                                <li><button value="en">English</button></li>
                                <li><button value="fn">French</button></li>
                                <li><button value="de">Germany</button></li>
                            </ul>
                        </div>
                    </div>

                    <div className="same-language-currency use-style">
                        <span>GBP <i className="fa fa-angle-down"></i></span>
                        <div className="lang-car-dropdown">
                            <ul>
                                <li><button value="USD">USD</button></li>
                                <li><button value="EUR">EUR</button></li>
                                <li><button value="GBP">GBP</button></li>
                            </ul>
                        </div>
                    </div>

                    <div className="same-language-currency">
                        <p>Call Us 010-4920-0306</p>
                    </div>

                </div>

                <div className="header-offer">
                    <p>9월 15일까지 배송료 <span>무료!</span></p>
                </div>

            </div>
            
        </div>
    </div>

    );

}