import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCalendar } from '@fortawesome/free-solid-svg-icons'
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
const Experience: FC = () => {
    //https://codepen.io/ygc/pen/AXzVya/


    return (
        <section className="experience-bg" id="best-offer-section">
                
            <div className="container-fluid">

                <div className="row example-basic">

                    <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 center">
                    <h1 className="experience-title">Experience</h1>
                        <ul className="timeline">
                            {experiences.data.map(item => (
                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>{item.fromDate} - {item.toDate}</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h2 className="timeline-title">{item.position}</h2>
                                        <h3 className="timeline-title">{item.company}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Experience;
