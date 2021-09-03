import React, {Fragment} from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Bread from '../../elements/ui/Bread';
import CompareTable from "../../elements/widgets/comparetable/CompareTable";
export default function Compare(){
    return(
        <Fragment>
        <Header/>
        <Bread breadName ="compare"/>
        <CompareTable/>
     


        <Footer/>
        </Fragment>
    );
 }