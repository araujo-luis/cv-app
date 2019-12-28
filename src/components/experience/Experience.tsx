import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Experience: FC = () => {
    //https://codepen.io/ygc/pen/AXzVya/
    return (
        <section id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                </div>

                <div className="cd-timeline-content">
                    <h2>Penta Consulting</h2>
                    <div className="timeline-content-info">
                        <span className="timeline-content-info-title">
                            <FontAwesomeIcon icon={faCode} className="icon-space" />
                            Front End Developer</span>
                        <span className="timeline-content-info-date">
                            <FontAwesomeIcon icon={faCalendar} className="icon-space" />
                            June 2016 - Present</span>
                    </div>
                    <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
                    <ul className="content-skills">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-movie">
                </div>

                <div className="cd-timeline-content">
                    <h2>Title of section 2</h2>
                    <div className="timeline-content-info">
                        <span className="timeline-content-info-title">
                            <FontAwesomeIcon icon={faCode} className="icon-space" />
                            Front End Developer
                        </span>
                        <span className="timeline-content-info-date">
                            <FontAwesomeIcon icon={faCalendar} className="icon-space" />
                            June 2016 - Present
                        </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                    <ul className="content-skills">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                </div>

                <div className="cd-timeline-content">
                    <h2>Title of section 3</h2>
                    <div className="timeline-content-info">
                        <span className="timeline-content-info-title">
                            <FontAwesomeIcon icon={faCode} className="icon-space" />
                            Front End Developer
                        </span>
                        <span className="timeline-content-info-date">
                            <FontAwesomeIcon icon={faCalendar} className="icon-space" />
                            June 2016 - Present
                        </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                    <ul className="content-skills">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-location">
                </div>

                <div className="cd-timeline-content">
                    <h2>Title of section 4</h2>
                    
                    <div className="timeline-content-info">
                        <span className="timeline-content-info-title">
                            <FontAwesomeIcon icon={faCode} className="icon-space" />
                            Front End Developer
                        </span>
                        <span className="timeline-content-info-date">
                            <FontAwesomeIcon icon={faCalendar} className="icon-space" />
                            June 2016 - Present
                        </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                    <ul className="content-skills">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-location">
                </div>

                <div className="cd-timeline-content">
                    <h2>Title of section 5</h2>
                    <div className="timeline-content-info">
                        <span className="timeline-content-info-title">
                            <FontAwesomeIcon icon={faCode} className="icon-space" />
                            Front End Developer
                        </span>
                        <span className="timeline-content-info-date">
                            <FontAwesomeIcon icon={faCalendar} className="icon-space" />
                            June 2016 - Present
                        </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                    <ul className="content-skills">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-movie">
                </div>

                <div className="cd-timeline-content">
                    <h2>Final Section</h2>
                    
                    <div className="timeline-content-info">
                        <span className="timeline-content-info-title">
                            <FontAwesomeIcon icon={faCode} className="icon-space" />
                            Front End Developer
                        </span>
                        <span className="timeline-content-info-date">
                            <FontAwesomeIcon icon={faCalendar} className="icon-space" />
                            June 2016 - Present
                        </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                    <ul className="content-skills">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
