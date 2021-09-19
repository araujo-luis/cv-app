import React, { FC } from 'react';

import MapContainer from './MapContainer';
import SocialIcons from '../introduce-yourself/SocialIcons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faBirthdayCake, faGlobe } from '@fortawesome/free-solid-svg-icons';
const Contact: FC = () => {
    const defaultProps = {
        center: {
            lat: 59.3293,
            lng: 18.0686
        },
        zoom: 11
    };
    return (
        <section className="best-offer contact" id="contact-me">
            <div className="section-banner-box">
                <div className="auto-container">
                    <div className="title-box"><h1><span className="lined-text">Contact</span><span className="bg-text">Me</span> </h1></div>

                    <div className="contactDetails container">
                        <div className="row contact-container">
                            <div className="col-md-6">
                                <div className="contact-info">
                                    <h3>Contact Information</h3>
                                    <ul className='icons'>
                                        <li> <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:luis_araujocaballero@hotmail.com">luis_araujocaballero@hotmail.com</a></li>
                                        <li> <FontAwesomeIcon icon={faBirthdayCake} /> Oct 22 1993</li>
                                        <li> <FontAwesomeIcon icon={faGlobe} /> Honduran</li>
                                    </ul>
                                    
                                    <p>You can also find me at:</p>
                                    
                                    <SocialIcons />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3>My Location</h3>
                                <MapContainer center={defaultProps.center} zoom={defaultProps.zoom} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;
