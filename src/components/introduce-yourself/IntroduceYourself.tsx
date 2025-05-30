import React, { FC } from 'react';

import Typist from 'react-typist';
import SocialIcons from './SocialIcons';
const IntroduceYourself: FC = () => {
    return (
        <section className="banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 nopadding">
                        <div className="left-banner-content">
                            <div className="text-content">
                                <h6>Hi!</h6>
                                <div className="line-dec"></div>
                                <Typist>
                                    <h1>Luis Araujo</h1>
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

                            <p>Software Engineer specialized in Web Development and Cloud Computing. I've dedicated over six years to serving various industries including Media, Education, Banking, and Healthcare. My expertise lies in backend development, particularly in crafting web services using Node.js, Spring Boot, and Rust. Additionally, I hold certification as an AWS Certified Developer (Associate).</p>
                            <p>I consider myself an energized professional who likes facing new challenges in each project. I enjoy having an active role within the entire software development life cycle and implementing clean/efficient code. I love organization in my daily tasks to perform at my best in every line of code I write.</p>

                            <ul>
                                <li><p>Typescript, NodeJS, Express</p></li>
                                <li><p>Amazon Web Services, Docker Containers, Cloud Computing, OpenStack</p></li>
                                <li><p>Rust</p></li>
                                <li><p>Java, SpringBoot, jUnit</p></li>
                                <li><p>DynamoDB, MySQL, Oracle, MongoDB</p></li>
                                <li><p>Distributed Systems, RabbitMQ, ActiveMQ</p></li>
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

