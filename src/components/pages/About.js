import React from "react";
import avatarPic from "../../assets/img/avatar3.JPG";
import backgroundPic from "../../assets/img/background.gif";

function About() {
    return (
        <header style={{backgroundImage: `url(${backgroundPic})`, backgroundSize: "cover"}} className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
              
                <img className="masthead-avatar mb-5" src={avatarPic} alt="Selina Su profile pic" />
               
                <h1 className="masthead-heading text-uppercase mb-0">Selina Su</h1>
               
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <p className="masthead-subheading font-weight-light mb-0">Full Stack Web Developer</p>
                <p>Hello! My name is Selina and I am currently living in Orange County, CA. I have a B.S. in Finance from CSU Long Beach, and MBA with a concentration in Management from UC Irvine. I have been working in finance industry since 2015 and experienced most of the retail banking roles from servicing, sales, leading to financial planning. My last role was VP-Investment Advisor at JP Morgan. I am fluent in 3 languages, Mandarin, Vietnamese and English.</p>
                <p>In my free time, I like walking with my dogs, reading books, and doing yoga. I am also passionate about travelling as it is my way to internal growth by seeing how immense the world is and how much more can I learn from it. Feel free to contact me for books and travel recommendation as well!</p>
            </div>
        </header>
    );
}

export default About;