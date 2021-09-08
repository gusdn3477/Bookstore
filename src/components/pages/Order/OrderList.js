import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import OrderListForm from './OrderListForm'
import { Fragment } from 'react';

export default function OrderList(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="거래내역" />
            <OrderListForm />
            <Footer/>
        </Fragment>
    );
}