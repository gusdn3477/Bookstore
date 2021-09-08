import Nav from '../elements/ui/Nav';
import Banner from '../elements/ui/Banner';
import HeaderTop  from '../elements/ui/HeaderTop';

export default function Header(){
    return (
        
        <header className="header-area clearfix">
            <HeaderTop/>
            <Nav/>
            
    </header>
    );
}