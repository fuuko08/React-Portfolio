import React from "react";
import techblogPic from "../../assets/img/portfolio/techblog.png";
import jatePic from "../../assets/img/portfolio/jate.png";
import nosqlPic from "../../assets/img/portfolio/nosql.png";
import weatherPic from "../../assets/img/portfolio/weather.png";
import teamPic from "../../assets/img/portfolio/team.png";
import trackerPic from "../../assets/img/portfolio/tracker.png";
import Project from "../Project";
import backgroundPic from "../../assets/img/background.webp";


function Portfolio() {
    return (
    <>
        <section style={{backgroundImage: `url(${backgroundPic})`}} className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    <Project 
                        id="1"
                        name="Text Editor PWA application"
                        description="My text editor is a single page application that runs in the browser and meets PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline. I use idb package, which is a lightweight wrapper around the indexedDB API. It features a number of methods that are useful for storing and retrieving data. App is deployed to Heroku."
                        github="https://github.com/fuuko08/CH19-PWA-Text-Editor"
                        deployed="https://jatetexteditorapp.herokuapp.com/"
                        img={jatePic}
                    />
                    <Project 
                        id="2"
                        name="Tech Blog MVC Fulltack application"
                        description="I built this Tech Blog for fellow developers who want to write and read about technical concepts, recent advancement, and new technologies. Using this blog allows users to share their coding knowdledge with each others by posting articles and commenting on other's posts. This app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. App is deployed to Heroku."
                        github="https://github.com/fuuko08/MVC-Tech-Blog"
                        deployed="https://techblogpro.herokuapp.com/"
                        img={techblogPic}
                    />
                    <Project 
                        id="3"
                        name="Social Network NOSQL API"
                        description="I built an API for a social network application where users can share their thoughts, react to friends' thoughts, and create a friend list. I used Express.js for routing, MongoDB database and Mongoose ODM. This application is back end only and won't be deployed. Please see the walkthought video for functionality demonstration. App is tested using Insomnia."
                        github="https://github.com/fuuko08/CH18-Social-Network-API"
                        deployed="https://youtu.be/BUXtTWuJvnM"
                        img={nosqlPic}
                    />
                    <Project 
                        id="4"
                        name="Server-Side APIs Weather Dashboard"
                        description="I built a weather dashboard that run in the browser and features dynamically updated HTML and CSS. I used third party APIs from openweathermap.org to retrieve data. This app also uses localstorage to store any persistent data for later uses."
                        github="https://github.com/fuuko08/CH06-Selina-Weather-Forecast-App"
                        deployed="https://fuuko08.github.io/CH06-Selina-Weather-Forecast-App/"
                        img={weatherPic}
                    />
                    <Project 
                        id="5"
                        name="Team Profile Generator Node.js application"
                        description="I built a Node.js command-line app that takes in information about employees on a software engineering team and generates an HTML page that displays summaries for each person. This app uses Inquirer package for collecting input, and Jest for running tests."
                        github="https://github.com/fuuko08/Ch10-Team-Profile-Generator"
                        deployed="https://fuuko08.github.io/CH06-Selina-Weather-Forecast-App/"
                        img={teamPic}
                    />
                    <Project 
                        id="6"
                        name="Employee Tracker SQL application"
                        description="I built a command-line application to manage a company's employee database. This app is using Node.js, Inquirer package to interact with the user, MySQL2 package to connect with MYSQL database and perform queries, and console.table package to print MYSQL rows to the console."
                        github="https://github.com/fuuko08/CH06-Selina-Weather-Forecast-App"
                        deployed="https://github.com/fuuko08/CH12---Employee-Tracker-"
                        img={trackerPic}
                    />

                </div>                
            </div>
        </section>        
    </>    
    );
}

export default Portfolio;