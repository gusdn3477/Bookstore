import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import MyAccountChangeForm from './MyAccountChangeForm'
import { Fragment } from 'react';

export default function MyAccountChange(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="회원정보 수정" />
            <MyAccountChangeForm />
            <Footer/>
        </Fragment>
    );
}