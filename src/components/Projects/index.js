import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/onboard.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Onboard project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Onboard</h3>
                            <p className="card-text">
                            A Onboarding application which makes it easier for you to manage your new employees, giving them tasks, 
                            todos and projects with a calender outlining each individual due date
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node, Express, Handlebars, MySQL,
                                    Sequelize, BrycptJS
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://murmuring-refuge-71106.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/MarketingPlus/Onboard" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/ems.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Employee Management System" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Employee Management System</h3>
                            <p className="card-text">
                            A node.js application that prompts users with a series of options which is used to help manage employees which is store in a database
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, NPM, SQL, Node.js
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://github.com/MarketingPlus/employee-management-system" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100 pb-5">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/tech-blog.png`} className="card-img-top border-bottom"
                            alt="Screenshot of Tech Blog" />
                        <div className="card-body mb-5 pl-0">
                            <h3>CMS Tech Blog</h3>
                            <p className="card-text">
                            A CMS style blog site which allows users to login, create an account, post comments and blog posts.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, NPM, JavaScript, jQuery, Sequelize, Express
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://mighty-gorge-97116.herokuapp.com/" className="btn mr-2" target="_blank" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/MarketingPlus/tech-blog" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/day.jpg`} className="card-img-top border-bottom"
                                alt="Screenshot of Day Scheduler" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Day Scheduler</h3>
                            <p className="card-text">
                            Daily Planner which displays the current date and the time
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, CSS, Mobile responsive
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://marketingplus.github.io/day-scheduler/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/MarketingPlus/day-scheduler" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/Weather.jpg`} className="card-img-top border-bottom"
                                alt="Screenshot of Weather Dashboard" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Weather Dashboard</h3>
                            <p className="card-text">
                                Weather app that provides current and future weather forecasts in cities.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Mobile
                                    responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://marketingplus.github.io/weather-dashboard/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/MarketingPlus/weather-dashboard" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/zafino.jpg`} className="card-img-top border-bottom"
                                alt="Screenshot of Zafino" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Zafino Jewellery</h3>
                            <p className="card-text">
                                A custom developed shopify store
                        </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, Javascript, Jquery, Shopify Liqud
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                            <a href="https://zafino.com.au" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
