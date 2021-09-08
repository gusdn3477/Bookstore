import React from 'react';
import { Link } from 'react-router-dom';
export default function Banner(){
    return(
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" style={{backgroundColor: "gray"}}>
                    <div className="container">
                      <div className="carousel-caption text-start">
                        <h1>3조 프로젝트</h1>
                        <p>3조가 운영하는 사이트에서 책을 구매해 보세요.</p>
                        <Link to="/register"><p className="btn btn-lg btn-primary">Sign up today</p></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        

    );
}