import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import MyAccountChangeForm from './MyAccountChangeForm'
import { Fragment } from 'react';


export default function ProductMake(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="상품등록" />
            <MyAccountChangeForm />
            <Footer/>
        </Fragment>
    );
}