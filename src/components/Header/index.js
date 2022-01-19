import React, {useState} from 'react';
import Nav from '../Nav';
import About from '../About'
import Portfolio from '../Portfolio'
import Resume from '../Resume'
import Contact from '../Contact'



const Header = () => {

    const [currentPage, changePage] = useState("About");

    const renderContent = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <About />;
        }
    }

    return (
        <div>
            <Nav
                currentPage={currentPage}
                changePage={changePage} 
            />
            <section>
                {renderContent(currentPage)}
            </section> 
        </div>
    );
}

export default Header;