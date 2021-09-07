import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import RegisterForm from '../../elements/widgets/Form/Register';
import { Fragment } from 'react';


export default function Register(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="Test List" />
            <RegisterForm />
            <Footer/>
        </Fragment>
    );
}