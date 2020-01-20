import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import experiences from '../../data/experiences';
import education from '../../data/education';
import certifications from '../../data/certifications';

const Fade = require('react-reveal/Fade');
interface ExperienceData {
    id: number;
    company: string
    companyLogo: string
    position: string
    location: string
    fromDate: string
    toDate: string
    description: string
    tools: string[]
}
const Experience: FC = () => {
    return (

        <section className="events bio_section" id="events-section">
            <div className="content-container">
                <div className="auto-container">

                    <div className="row clearfix">

                        <div className="timeline-column col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="inner">
                                <div className="col-header"><div className="icon-box"><div className="icon-inner"><div className="icon"><span className="flaticon-briefcase-1"><FontAwesomeIcon icon={faBriefcase} /></span></div></div></div> <h2>Employment</h2></div>

                                {experiences.data.map((item, index) => (
                                    <Fade key={item.id} left>
                                        <div className="timeline-block">
                                            <div className="inner-box">
                                                <div className="date">{item.fromDate} - {item.toDate}</div>
                                                <h4>{item.company}</h4>
                                                <h3>{item.location}</h3>
                                                <div className="text" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                                <div className="content-skills">
                                                    {item.tools.map((tool, index) => (
                                                        <button key={index}>{tool}</button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                ))}

                            </div>
                        </div>

                        <div className="timeline-column col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="inner">
                                <div className="col-header"><div className="icon-box"><div className="icon-inner"><div className="icon"><span className="flaticon-graduation-cap"><FontAwesomeIcon icon={faUserGraduate} /> </span></div></div></div> <h2>Education</h2></div>

                                {education.data.map(item => (
                                    <Fade key={item.id} right>
                                        <div className="timeline-block">
                                            <div className="inner-box">
                                                <div className="date">{item.dateFrom} - {item.dateTo}</div>
                                                <h4>{item.degreeTitle}</h4>
                                                <h3>{item.universityName}</h3>
                                                <div className="text">{item.description}</div>

                                            </div>
                                        </div>
                                    </Fade>
                                ))}

                            </div>
                            <div className="inner">
                                <div className="col-header"><div className="icon-box"><div className="icon-inner"><div className="icon"><span className="flaticon-graduation-cap"><FontAwesomeIcon icon={faUserGraduate} /> </span></div></div></div> <h2>Courses & Certifications</h2></div>

                                {certifications.data.map(item => (
                                    <Fade key={item.id} right>
                                        <div className="timeline-block">
                                            <div className="inner-box">
                                                <div className="date">{item.dateFrom}</div>
                                                <h4>{item.degreeTitle}</h4>
                                                <h3>{item.universityName}</h3>
                                                <div className="text">{item.description}</div>
                                                <h3 className="credential">
                                                    <a href={item.url} rel="noopener noreferrer" target="_blank" >See credential</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </Fade>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Experience;

