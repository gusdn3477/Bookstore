import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import UserListForm from './UserListForm';
import { Fragment } from 'react';


export default function UserList(){

    return(
        <Fragment>
            <Header/>
            <Bread breadName ="사용자 목록" />
            <UserListForm />
            <Footer/>
        </Fragment>
    );
}