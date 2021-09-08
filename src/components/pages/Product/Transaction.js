import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import TransactionForm from './TransactionForm'
import { Fragment } from 'react';


export default function Transaction(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="거래내역 Page" />
            <TransactionForm />
            <Footer/>
        </Fragment>
    );
}