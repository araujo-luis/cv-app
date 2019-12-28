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
        <div>
        <section className="events" id="events-section">
            <div className="content-wrapper">
            <section id="cd-timeline" className="cd-container">
            {experiences.data.map((item: ExperienceData) => (
                <div className="cd-timeline-block" key={item.id}>
                    <div className="cd-timeline-img cd-location"></div>
                    <div className="cd-timeline-content">
                        <h2>{item.company}</h2>
                        <div className="timeline-content-info">
                            <span className="timeline-content-info-title">
                                <FontAwesomeIcon icon={faCode} className="icon-space" />
                                {item.position}</span>
                            <span className="timeline-content-info-date">
                                <FontAwesomeIcon icon={faCalendar} className="icon-space" />
                                {item.fromDate} - {item.toDate}</span>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        <ul className="content-skills">
                            {item.tools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
            </div>
        </section>
       
        </div>
    );
}

export default Experience;
