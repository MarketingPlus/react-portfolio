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