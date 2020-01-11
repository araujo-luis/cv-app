import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Contact: FC = (props) => {

    return (
        <section className="best-offer contact" id="best-offer-section">
            <div className="section-banner-box">
                <div className="auto-container">
                    <div className="title-box"><h1><span className="lined-text">Contact</span><span className="bg-text">Me</span> </h1></div>

                    <div className="contactDetails">
                        <div className="container">


                            <div className="col-xs-12 col-sm-3 col-md-4 col-lg-4">
                                <h4>Contact details</h4>
                                <p> <i className="fa fa-map-marker fa-lg"></i> Collins Street West Victoria 8007 Australia</p>
                                <p> <i className="fa fa-mobile fa-lg"></i> +1800 1234 56789</p>
                                <p> <i className="fa fa-envelope-o "></i> <a href="mailto:support@websitename.com">support@websitename.com</a></p>
                                <p> <i className="fa fa-link "></i> <a href="www.websitename.com">www.websitename.com</a></p>
                            </div>



                            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-8 conForm">
                                <h4>Shoot a message!</h4>
                                <div id="message"></div>
                                <form method="post" action="php/contact.php" name="cform" id="cform">
                                    <input name="name" id="name" type="text" className="col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Your name..." />
                                    <input name="email" id="email" type="email" className=" col-xs-12 col-sm-6 col-md-6 col-lg-6 noMarr" placeholder="Your email..." />
                                    <textarea name="comments" id="comments" className="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Your message..."></textarea>

                                    <input type="submit" id="submit" name="send" className="submitBnt" value="Send message" />
                                    <div id="simple-msg"></div>
                                </form>
                            </div>


                        </div>
                    </div>



                </div>
            </div>
        </section>
        
    );
}

export default Contact;
