import React, { useState } from "react";
import { emailValidation } from "../../utils/helpers";

function Contact() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!emailValidation(email) || !userName) {
            setErrorMessage("Invalid Email or Name!");
            return;
        }
        if (!setMessage(message)) {
            setErrorMessage(`Please enter your Message!`);
            return;
        } else {
            setErrorMessage("I will be in touch soon!");
            setUserName("");
            setMessage("");
            setEmail("");
            return;
        }            
    };

        return (
            <section className="page-section" id="contact">
                <div className="container">                
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Let's get in touch!</h2>                
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>               
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">

                        <form id="contactForm" action="mailto:phongsu20@gmail.com" method="post">                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." name="userName" value={userName} onChange={handleInputChange}/>
                                <label for="name">Full name</label>
                            </div>   

                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" name="email" value={email} onChange={handleInputChange} />
                                <label for="email">Email address</label>
                            </div>  

                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} name="message" value={message} onChange={handleInputChange}></textarea>
                                <label for="message">Message</label>
                            </div>    

                            <button 
                                className="btn btn-primary btn-xl" 
                                id="submitButton" 
                                type="submit"  
                                onClick={handleFormSubmit}
                                >
                                    Send
                            </button>{" "}
                        </form>
                        </div>
                    </div>
                            {errorMessage && (
                                <div className="d-none" id="submitErrorMessage">
                                    <p className="text-center text-danger mb-3">{errorMessage}</p>
                                </div> 
                            )}                   
                </div>
            </section>
        );      
    }

export default Contact;