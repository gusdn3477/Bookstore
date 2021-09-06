import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import TestTable from '../../elements/widgets/TestTable/TestTable';
import LoginForm from '../../elements//widgets/Form/Login';
import { Fragment } from 'react';


export default function Test(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="Test List" />
            <LoginForm />
            <Footer/>
        </Fragment>
    );
}