import React from "react";
import techblogPic from "../../assets/img/portfolio/techblog.png";

function TechBlog() {
    return (
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Tech Blog MVC Fulltack application</h2>
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    
                                    <img class="img-fluid rounded mb-5" src={techblogPic} alt="TechBlog" />
                                    <p class="mb-4">
                                        I built this Tech Blog for fellow developers who want to write and read about technical concepts, recent advancement, and new technologies. Using this blog allows users to share their coding knowdledge with each others by posting articles and commenting on other's posts. 
                                        This app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. 
                                        App is deployed to Heroku.
                                    </p>
                                    <a href="https://github.com/fuuko08/MVC-Tech-Blog" class="mb-4">Go to Github repository</a> <br />
                                    <a href="https://techblogpro.herokuapp.com/" class="mb-4">Go to deployed link</a> <br />
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechBlog;