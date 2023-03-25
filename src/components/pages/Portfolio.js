import React from "react";
import techblogPic from "../../assets/img/portfolio/techblog.png";
import jatePic from "../../assets/img/portfolio/jate.png";
import orderPic from "../../assets/img/portfolio/order.png";
import weatherPic from "../../assets/img/portfolio/weather.png";
import teamPic from "../../assets/img/portfolio/team.png";
import trackerPic from "../../assets/img/portfolio/tracker.png";
import notePic from "../../assets/img/portfolio/note.png";
import bookPic from "../../assets/img/portfolio/book.png";
import popcornPic from "../../assets/img/portfolio/popcorn.png";
import shopPic from "../../assets/img/portfolio/shop.png";
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
                        name="Popcorn N Chill"
                        description="Popcorn N Chill is an application where users can search from a variety of movies and tv-shows, and save them to their personal profile page. There they can see their saved movie or tv-show descriptions and ratings, along with comments made by other users. It is a social media app for the movie and tv buff. App uses MERN Stack, Apollo Server and GraphQL API. Teamsize: 4"
                        github="https://github.com/alisradwan/Popcorn-Chill"
                        deployed="https://popcornchillapp.herokuapp.com/"
                        img={popcornPic}
                    />               
                    <Project 
                        id="2"
                        name="Tech Blog MVC Fulltack application"
                        description="I built this Tech Blog for fellow developers who want to write and read about technical concepts, recent advancement, and new technologies. Using this blog allows users to share their coding knowledge with each others by posting articles and commenting on other's posts. This app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. App is deployed to Heroku."
                        github="https://github.com/fuuko08/MVC-Tech-Blog"
                        deployed="https://techblogpro.herokuapp.com/"
                        img={techblogPic}
                    />                    
                    <Project 
                        id="3"
                        name="Server-Side APIs Weather Dashboard"
                        description="I built a weather dashboard that provide 5 days weather Forecast for the location entered in the search box. The app run in the browser and features dynamically updated HTML and CSS. I used third party APIs from openweathermap.org to retrieve data. This app also uses localstorage to store any persistent data for later uses."
                        github="https://github.com/fuuko08/Weather-Forecast-App"
                        deployed="https://fuuko08.github.io/Weather-Forecast-App/"
                        img={weatherPic}
                    />
                    <Project 
                        id="4"
                        name="React Food Ordering app "
                        description="A single page React app that allows users to order foods, add foods to cart, remove foods from cart, change the amount and get the total price calculated. This simple front-end only app is using React.js, Javascript, HTML and CSS."
                        github="https://github.com/fuuko08/React-Food-Order-App"
                        deployed="https://fuuko08.github.io/React-Food-Order-App/"
                        img={orderPic}
                    />
                    <Project ç
                        id="5"
                        name="Team Profile Generator Node.js application"
                        description="I built a Node.js command-line app that takes in information about employees on a software engineering team and generates an HTML page that displays summaries for each person. This app uses Inquirer package for collecting input, and Jest for running tests."
                        github="https://github.com/fuuko08/Ch10-Team-Profile-Generator"
                        deployed="https://youtu.be/ynk4w8pgGjo"
                        img={teamPic}
                    />
                    <Project 
                        id="6"
                        name="Employee Tracker SQL application"
                        description="I built a command-line application to manage a company's employee database. This app is using Node.js, Inquirer package to interact with the user, MySQL2 package to connect with MYSQL database and perform queries, and console.table package to print MYSQL rows to the console."
                        github="https://github.com/fuuko08/CH12---Employee-Tracker-"
                        deployed="https://youtu.be/XC1LdwiztjA"
                        img={trackerPic}
                    />
                    <Project 
                        id="7"
                        name="Note Taker Express.js "
                        description="This app allows users to write and save notes for their daily tasks. App uses an Express.js back end and will save and retrieve note data from a JSON file. App is deployed with Heroku."
                        github="https://github.com/fuuko08/CH11-Note-Taker-App"
                        deployed="https://note-taker-selina.herokuapp.com/"
                        img={notePic}
                    />
                    <Project 
                        id="8"
                        name="MERN Book Search Engine"
                        description="A book search engine app using Google Book API that allows users to search for book and save books in their profile. The app was built using the MERN Stack, with a React front end, MongoDB database, Node.js/Express.js server and GraphQL API. I also created an Apollo Provider so that requests can communicate with an Apollo Server. App is deployed with Heroku."
                        github="https://github.com/fuuko08/MERN-Book-Search-Engine"
                        deployed="https://mear-booksearchengine.herokuapp.com/"
                        img={bookPic}
                    />
                    <Project 
                        id="9"
                        name="Text Editor PWA application"
                        description="My text editor is a single page application that runs in the browser and meets PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline. I use idb package, which is a lightweight wrapper around the indexedDB API. It features a number of methods that are useful for storing and retrieving data. App is deployed to Heroku."
                        github="https://github.com/fuuko08/PWA-Text-Editor"
                        deployed="https://jatetexteditorapp.herokuapp.com/"
                        img={jatePic}
                    />
                    <Project 
                        id="10"
                        name="Shop-Shop Redux Store"
                        description="An e-commerce platform using Redux for managing complex state in a large-scale React application. App uses MongoDB database, Node.js, Express.js and Stripe payment library. App is deployed to Heroku."
                        github="https://github.com/fuuko08/Redux-Store"
                        deployed="https://reduxstore.herokuapp.com/"
                        img={shopPic}
                    />
                </div>                
            </div>
        </section>        
    </>    
    );
}

export default Portfolio;