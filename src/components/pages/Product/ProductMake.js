import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import ProductMakeForm from './ProductMakeForm'
import { Fragment } from 'react';


export default function ProductMake(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="상품 등록 Page" />
            <ProductMakeForm />
            <Footer/>
        </Fragment>
    );
}