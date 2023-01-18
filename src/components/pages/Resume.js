import React from "react";
import backgroundPic from "../../assets/img/background.gif";


function Resume() {
    return (
        <section style={{backgroundImage: `url(${backgroundPic})`, backgroundSize: "cover"}} className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
               
                <h2 className="page-section-heading text-center text-uppercase text-white">Resume</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <div className="row">
                    <div className="col-lg-3 ms-auto">
                        <p className="lead">Front-End Tech</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>APIs</li>
                                <li>Bootstrap</li>
                                <li>GIT</li>
                            </ul>
                    </div>
                    <div className="col-lg-3 ms-auto">
                        <p className="lead">Back-End Tech</p>
                            <ul>
                                <li>Node.js</li>
                                <li>Jest</li>
                                <li>Express.js</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>Object-Relational Mapping (ORM)</li>
                                <li>Model-View Controller (MVC)</li>
                            </ul>
                    </div>
                    <div className="col-lg-3 ms-auto">
                        <p className="lead">Performance Tech</p>
                            <ul>
                                <li>NoSQL</li>
                                <li>Progressive Web App (PWA)</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>GraphQL</li>
                                <li>React.js</li>
                                <li>MERN</li>
                            </ul>
                    </div>
                </div>
                
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href={process.env.PUBLIC_URL + "/resume.pdf"}>
                        <i className="fas fa-download me-2"></i>
                        Download My Resume!
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;