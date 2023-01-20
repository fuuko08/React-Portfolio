import React from "react";

function Footer() {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">                            
                            Orange County, CA 92704
                            <br />
                            (willing to relocate)
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/SelinaSu08"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/selina-su-437501144/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/fuuko08"><i className="fab fa-fw fa-github"></i></a>
                    </div>
                  
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Contact Info</h4>
                        <p className="lead mb-0">
                            Phone number: 714-908-6817
                            <br />
                            Email: phongsu20@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;