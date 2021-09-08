export default function CartTableFooter() {
    return(
        <div className="row">
            <div className="col-lg-4 col-md-6">
            </div>
            <div className="col-lg-4 col-md-6">
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="grand-totall">
                    <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                    </div>
                    <h5>Total products <span>$73.13</span></h5>
                    <h4 className="grand-totall-title">Grand Total <span>$73.13</span></h4>
                    <a href="/checkout">Proceed to Checkout</a>
                </div>
            </div>
        </div>
    );
}