import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faDev } from '@fortawesome/free-brands-svg-icons';
import Typist from 'react-typist';
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
                            <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et sem blandit, rhoncus ante a, varius libero. Cras elementum tincidunt ullamcorper. Sed vehic ula dictum tortor ut aliquet. ”</p>
                            <ul className="social-icons">
                                <li><a href="https://www.linkedin.com/in/l222p/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="https://github.com/l222p" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a href="https://dev.to/l222p" target="_blank"><FontAwesomeIcon icon={faDev} /></a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroduceYourself;
