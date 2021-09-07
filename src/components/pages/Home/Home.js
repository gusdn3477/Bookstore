import React from 'react';
import Header from '../../../components/layout/Header';
import Deal from '../../../components/pages/deal/Deal';
import Brand from '../../../components/elements/widgets/brand/Brand';
import Blog from '../Blog/Blog';
import Footer from '../../layout/Footer';
import Banner from '../../elements/ui/Banner';

export default function Home(){
    return(
        <div id="wrap">
        <Header/>
        <Banner/>
        <Deal />
        <Blog/>
        <Footer/>
      </div>

    );
}