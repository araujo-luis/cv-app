import React, { FC } from 'react';

import Typist from 'react-typist';
import SocialIcons from './SocialIcons';
const IntroduceYourself: FC = () => {
    return (
        <section className="banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="left-banner-content">
                            <div className="text-content">
                                <h6>Hi!</h6>
                                <div className="line-dec"></div>
                                <Typist>
                                    <h1>I'm Luis Araujo</h1>
                                    <h3>Computer Sciences Engineer</h3>
                                </Typist>                            
                                <div className="white-border-button">
                                    <a href="https://cv-luis-araujo.s3.amazonaws.com/cv-luis-araujo.pdf" target="_blank" rel="noopener noreferrer" download className="scroll-link" data-id="best-offer-section">Download CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right-banner-content">
                            <div className="logo"></div>
                            <h2>Luis Araujo</h2>
                            <div className="line-dec"></div>
                            
                            <p>Computer Sciences Engineer focused on Web Development and Cloud Computing. Able to identify, design and implement appropriate technological solutions in a business environment. Knowledge:</p>
                            
                            
                            <ul>
                                <li><p>Database engines: MS-SQL Server, MySQL and MongoDB.</p></li>
                                <li><p>Front End: JavaScript, HTML5 and CSS3.</p></li>
                                <li><p>Back End: Java, PHP, NodeJS and Python.</p></li>
                                <li><p>Administration of LINUX Servers and Windows Server.</p></li>
                                <li><p>Cloud Computing with OpenStack and Windows Azure.</p></li>
                                <li><p>Development based on Microservices: Docker, Docker Swarm, Docker Machine.</p></li>
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

