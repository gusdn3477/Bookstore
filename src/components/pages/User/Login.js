import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import LoginForm from '../../elements/widgets/Form/Login';
import { Fragment } from 'react';


export default function Login(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="Login Page" />
            <LoginForm />
            <Footer/>
        </Fragment>
    );
}