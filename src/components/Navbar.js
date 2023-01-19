import React from "react";

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">Selina Su</a>
                <button className="navbar-toggler text-uppercase rounded" style={{backgroundColor: "var(--bs-primary)", color: "var(--bs-dark)"}}type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                            <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link py-3 px-0 px-lg-3 rounded'} 
                            href="#about" 
                            onClick={() => handlePageChange('About')}
                            >
                                About Me
                            </a>
                        </li>

                        <li className="nav-item mx-0 mx-lg-1">
                            <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link py-3 px-0 px-lg-3 rounded'} 
                            href="#portfolio" 
                            onClick={() => handlePageChange('Portfolio')}
                            >
                                Portfolio
                            </a>
                        </li>

                        <li className="nav-item mx-0 mx-lg-1">
                            <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link py-3 px-0 px-lg-3 rounded'} 
                            href="#contact" 
                            onClick={() => handlePageChange('Contact')}
                            >
                                Contact
                            </a>
                        </li>

                        <li className="nav-item mx-0 mx-lg-1">
                            <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link py-3 px-0 px-lg-3 rounded'} 
                            href="#resume" 
                            onClick={() => handlePageChange('Resume')}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;