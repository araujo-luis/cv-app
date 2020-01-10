import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import experiences from '../../data/experiences';

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
const Experience3: FC = () => {
    //https://codepen.io/ygc/pen/AXzVya/


    return (

        <section className="events bio_section" id="events-section">
            <div className="content-container">
                <div className="auto-container">

                    <div className="title-style-one">
                        <h2>Work History</h2>
                    </div>

                    <div className="row clearfix">

                        <div className="timeline-column col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="inner">
                                <div className="col-header"><div className="icon-box"><div className="icon-inner"><div className="icon"><span className="flaticon-briefcase-1"><FontAwesomeIcon icon={faBriefcase} /></span></div></div></div> <h2>Employment</h2></div>

                                {experiences.data.map(item => (
                                    <div className="timeline-block">
                                        <div className="inner-box">
                                            <div className="date">{item.fromDate} - {item.toDate}</div>
                                            <h4>{item.company}</h4>
                                            <h3>{item.location}</h3>
                                            <div className="text" dangerouslySetInnerHTML={{ __html: item.description }}></div>

                                        </div>
                                    </div>
                                ))}




                            </div>
                        </div>


                        <div className="timeline-column col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="inner">
                                <div className="col-header"><div className="icon-box"><div className="icon-inner"><div className="icon"><span className="flaticon-graduation-cap"><FontAwesomeIcon icon={faUserGraduate} /> </span></div></div></div> <h2>Education</h2></div>


                                <div className="timeline-block">
                                    <div className="inner-box">
                                        <div className="date">2006</div>
                                        <h4>Software Engineering</h4>
                                        <div className="text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. </div>
                                    </div>
                                </div>


                                <div className="timeline-block">
                                    <div className="inner-box">
                                        <div className="date">2006 - 2010</div>
                                        <h4>Copmuter Science</h4>
                                        <div className="text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. </div>
                                    </div>
                                </div>


                                <div className="timeline-block">
                                    <div className="inner-box">
                                        <div className="date">2010 - 2012</div>
                                        <h4>Auto Mobiles</h4>
                                        <div className="text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="text-center btn-box"><a href="#" className="theme-btn btn-style-two">Download Resume</a></div>

                </div>
            </div>
        </section>

    );
}

export default Experience3;

