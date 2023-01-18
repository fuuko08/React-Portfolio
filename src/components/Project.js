import React from "react";

function Project(props) {
    return (
        <>
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`portfolioModal${props.id}`}>
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={`${props.img}`} alt={`${props.title}`} />
                </div>
            </div>
                                        
            <div class="portfolio-modal modal fade" id={`portfolioModal${props.id}`} tabindex="-1" aria-labelledby={`portfolioModal${props.id}`} aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div class="modal-body text-center pb-5">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{props.name}</h2>
                                        <div class="divider-custom">
                                            <div class="divider-custom-line"></div>
                                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                            <div class="divider-custom-line"></div>
                                        </div>
                                        
                                        <img class="img-fluid rounded mb-5" src={`${props.img}`} alt={`${props.title}`} />
                                        <p class="mb-4">
                                            {props.description}
                                        </p>
                                        <a href={`${props.github}`} class="mb-4">Go to Github repository</a> <br />
                                        <a href={`${props.deployed}`} class="mb-4">Go to deployed application</a> <br /> <br />
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
        </>
    );
}

export default Project;