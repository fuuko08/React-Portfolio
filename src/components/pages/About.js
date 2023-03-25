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
                <p>Hello! My name is Selina and I am currently living in Orange County, CA. I have over 8 years of experience working in the finance industry, where I developed a strong foundation in problem-solving, critical thinking, and attention to details. Additionally, I hold an MBA degree from UC Irvine, which has equipped me with strategic and analytical skills. These qualities have helped me excel in my previous career, and I am confident they will translate well into my new role as a developer.</p>
                <p>I developed proficiency in various programming languages, including HTML, CSS, JavaScript, Typescript, C#, React.js, Asp.NET Core, Node.js, MySQL, and MongoDB. I have also worked on more than 20 deployed projects, such as building dynamic full stack web applications and creating responsive user interfaces. Through these experiences, I developed strong collaboration and communication skills, which I believe are essential to working effectively in a team environment</p>
                <p>In my free time, I like walking with my dogs, reading books, and doing yoga. I am also passionate about travelling as it is my way to internal growth by seeing how immense the world is and how much more can I learn from it. Feel free to contact me for books and travel recommendation as well!</p>
                
            </div>
        </header>
    );
}

export default About;