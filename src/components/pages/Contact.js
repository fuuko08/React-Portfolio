import React from "react";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import backgroundPic from "../../assets/img/background.webp";


function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
    };
  
    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
              name,
              email,
              subject,
              message
            };
            await emailjs.send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              templateParams,
              process.env.REACT_APP_USER_ID
            );
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }            
    };

    return (
        <section style={{backgroundImage: `url(${backgroundPic})`}} className="page-section" id="contact">
            <div className="container">                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Let's get in touch!</h2>                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>               
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">

                    <form id="contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>                            
                        <div className="form-floating mb-3">
                            <input 
                                className="form-control" 
                                id="name" 
                                type="text" 
                                placeholder="Enter your name..." 
                                name="name"
                                {...register('name', {
                                    required: { value: true, message: 'Please enter your name' },
                                    maxLength: {
                                      value: 30,
                                      message: 'Please use 30 characters or less'
                                    }
                                })}
                            ></input>
                            {errors.name && <span className='errorMessage alert-danger'>{errors.name.message}</span>}
                            <label for="name">Full name</label>
                        </div>   

                        <div className="form-floating mb-3">
                            <input 
                                className="form-control" 
                                id="email" 
                                type="email" 
                                placeholder="name@example.com" 
                                name="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&*'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                })}
                            ></input>
                            {errors.email && (
                                <span className='errorMessage alert-danger'>Please enter a valid email address</span>
                            )}
                            <label for="email">Email address</label>
                        </div>  

                        <div className="form-floating mb-3">
                            <textarea 
                                className="form-control" 
                                id="message" 
                                type="text" 
                                placeholder="Enter your message here..." 
                                style={{height: "10rem"}} 
                                name="message"
                                {...register('message', {
                                    required: true
                                })}
                            ></textarea>
                            {errors.message && <span className='errorMessage alert-danger'>Please enter a message</span>}
                            <label for="message">Message</label>
                        </div>    

                        <button 
                            className="btn btn-primary btn-xl" 
                            id="submitButton" 
                            type="submit"  
                            >
                                Send
                        </button>
                    </form>
                    </div>
                </div>           
            </div>
        </section>
    );      
}

export default Contact;