import React, { useState } from 'react';
import About from "./pages/About";
import Navbar from "./Navbar";
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Resume":
                return <Resume />;
            case "Contact":
                return <Contact />;
        }
    };

    return (
        <div>
            <Navbar
                currentPage={currentPage}
                handlePageChange={handlePageChange} 
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    )
}

export default Header