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
                                    <a href="#" className="scroll-link" data-id="best-offer-section">Download CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right-banner-content">
                            <div className="logo"><a href="index.html"><img src="img/logo.png" alt="" /></a></div>
                            <h2>Avalon</h2>
                            <span>Creative <em>HTML</em> Template</span>
                            <div className="line-dec"></div>
                            
                            <p>
                            <ul>
                                <li>Email: luis.araujo@laureate.net</li>
                                <li>Phone: +504 9969 9606</li>
                                <li>Date of Birth: Oct 22 1993</li>
                                <li>Nationality: Honduran</li>
                            </ul>
                            </p>
                           <SocialIcons/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroduceYourself;

