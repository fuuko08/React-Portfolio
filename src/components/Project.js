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
        <div className="portfolio-modal modal fade" id={`portfolioModal${props.id}`} tabIndex="-1" aria-labelledby={`portfolioModal${props.id}`} aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{props.name}</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    
                                    <img className="img-fluid rounded mb-5" src={`${props.img}`} alt={`${props.title}`} />
                                    <p className="mb-4">
                                        {props.description}
                                    </p>
                                    <a href={`${props.github}`} className="mb-4">Go to Github repository</a> <br />
                                    <a href={`${props.deployed}`} className="mb-4">Go to deployed application</a> <br /> <br />
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
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