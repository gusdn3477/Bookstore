import { Fragment } from "react";
import { Link } from "react-router-dom";
export default function ProDetRgtBottom() {

    return(
        <Fragment>
            <div className="pro-details-meta">
                <span>Categories :</span>
                <ul>
                    <li><Link to ="/shop-grid-standard">fashion</Link></li>
                    
                </ul>
            </div>
            <div className="pro-details-meta">
                <span>Tags :</span>
                <ul>
                    <li><a href="/shop-grid-standard">fashion</a></li>
                </ul>
            </div>
            <div className="pro-details-social">
                <ul>
                    <li><Link to ="//facebook.com"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to ="//naver.com"><i className="fab fa-line"></i></Link></li>
                    <li><Link to ="//twitter.com"><i className="fab fa-twitter"></i></Link></li>
                </ul>
            </div>
        </Fragment>
    );
}

