import React, { FC } from 'react';


const IntroduceYourself: FC = () => {
    return (
        <section className="banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="left-banner-content">
                            <div className="text-content">
                                <h6>There you go</h6>
                                <div className="line-dec"></div>
                                <h1>Clean &amp; Minimal <br />Template</h1>
                                <div className="white-border-button">
                                    <a href="#" className="scroll-link" data-id="best-offer-section">Discover More</a>
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
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroduceYourself;
