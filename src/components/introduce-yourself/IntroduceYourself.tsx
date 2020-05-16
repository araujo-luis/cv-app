import React, { FC } from 'react';

import Typist from 'react-typist';
import SocialIcons from './SocialIcons';
const IntroduceYourself: FC = () => {
    return (
        <section className="banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="left-banner-content">
                            <div className="text-content">
                                <h6>Hi!</h6>
                                <div className="line-dec"></div>
                                <Typist>
                                    <h1>I'm Luis Araujo</h1>
                                    <h3>Software Engineer</h3>
                                </Typist>
                                <div className="white-border-button">
                                    <a href="https://cv-luis-araujo.s3.amazonaws.com/cv-luis-araujo.pdf" target="_blank" rel="noopener noreferrer" download className="scroll-link" data-id="best-offer-section">Download CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-banner-content">
                            <div className="logo"></div>
                            <h2>Luis Araujo</h2>
                            <div className="line-dec"></div>

                            <p>I'm a Software Engineer focused on web development and cloud computing, specializing in back-end development. I have worked in the development of web services based in Java and Spring frameworks as well as components using Node.js and Express. I have also developed front-end applications using Angular and React frameworks.</p>
                            <p>I'm a high energy professional who likes being challenged with new projects. I enjoy having an active role within the entire software development life cycle. I'm able to identify, design, and implement appropriate technological solutions in a business environment.</p>

                            <ul>
                                <li><p>Java, JEE, MVC, SpringBoot, jUnit</p></li>
                                <li><p>JavaScript, Angular, React, NodeJS, Express, jQuery</p></li>
                                <li><p>MS SQL, MySQL, Oracle, MongoDB</p></li>
                                <li><p>Distributed Systems, RabbitMQ, ActiveMQ</p></li>
                                <li><p>Amazon Web Services, Docker Containers, Cloud Computing, OpenStack</p></li>
                                <li><p>Agile Methodologies, Scrum, SAFe</p></li>
                            </ul>

                            <p>&nbsp;</p>
                            <SocialIcons />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroduceYourself;

