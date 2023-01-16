import React, { Component } from "react";
import { render } from "react-dom";

class Contact extends Component {
    state = {name: "", email: "", message: "", error: "",};

    handleInputChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("form submit button clicked");
    };

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">                
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>                
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>               
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">                        
                            <form id="contactForm" action="mailto:phongsu20@gmail.com" method="post">                            
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label for="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>                          
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                    <label for="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>                                                      
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                    <label for="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>                           
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>                            
                                <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit" value="Send" onClick={this.handleFormSubmit}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        ); 
    }  
}

export default Contact;