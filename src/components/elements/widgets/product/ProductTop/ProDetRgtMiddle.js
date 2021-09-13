import { Fragment, useState, useEffect } from "react";
import AddBuyAndCart from './AddBuyAndCart';

export default function ProDetRgtMiddle({productId, qty, unitPrice}) {

    // const { id } = useParams();

    const [ varData, setVardata ] = useState([]);
    const [ color, setColor] = useState("");
    const [size, setSize] = useState("");

    var process = require('../../../../../db/myProcess.json');
    
    return (
        <Fragment>
            <AddBuyAndCart
                productId = {productId}
                qty = {qty}
                unitPrice = {unitPrice}
            /> 
        </Fragment>
    
    );
}