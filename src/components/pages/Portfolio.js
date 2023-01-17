import React from "react";
import techblogPic from "../../assets/img/portfolio/techblog.png";
import cabinPic from "../../assets/img/portfolio/cabin.png";
import circusPic from "../../assets/img/portfolio/circus.png";
import safePic from "../../assets/img/portfolio/safe.png";
import submarinePic from "../../assets/img/portfolio/submarine.png";
import gamePic from "../../assets/img/portfolio/game.png";
import Project from "../Project";


function Portfolio() {
    return (
    <>
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={cabinPic} alt="Cabin" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={techblogPic} alt="TechBlog" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={circusPic} alt="Circus" />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={gamePic} alt="Game" />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={safePic} alt="Safe" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={submarinePic} alt="Submarine" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Project 
            name="Tech Blog MVC Fulltack application"
            description="I built this Tech Blog for fellow developers who want to write and read about technical concepts, recent advancement, and new technologies. Using this blog allows users to share their coding knowdledge with each others by posting articles and commenting on other's posts. This app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. App is deployed to Heroku."
            github="https://github.com/fuuko08/MVC-Tech-Blog"
            deployed="https://techblogpro.herokuapp.com/"
            img={techblogPic}
        />
        <Project 
            name="Tech Blog MVC Fulltack application"
            description="I built this Tech Blog for fellow developers who want to write and read about technical concepts, recent advancement, and new technologies. Using this blog allows users to share their coding knowdledge with each others by posting articles and commenting on other's posts. This app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. App is deployed to Heroku."
            github="https://github.com/fuuko08/MVC-Tech-Blog"
            deployed="https://techblogpro.herokuapp.com/"
            img={techblogPic}
        />
    </>    
    );
}

export default Portfolio;