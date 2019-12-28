import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import universities from '../../data/education';

interface UniversitiesData {
    id: number
    universityName: string
    dateFrom: string
    dateTo: string
    degree: string
    degreeTitle: string
    description: string
    image: string
    url: string
}

const Education: FC = () => {
    //https://codepen.io/ygc/pen/AXzVya/
    
    return (
        <section className="best-offer" id="best-offer-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="best-offer-left-content">
                        <div className="icon"><FontAwesomeIcon icon={faUniversity}/></div>
                        <h4>Education</h4>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="best-offer-right-content">
                        <div className="row">
                            {universities.data.map( (item: UniversitiesData) =>(
                                <div className="col-md-12 university-margin" key={item.id}>
                                <h2>{item.degreeTitle}</h2>
                                <h3> <em>  {item.universityName} {item.dateFrom} - {item.dateTo}</em></h3>
                                <p>{item.description}</p>
                                
                                <div className="pink-button">
                                    <a href={item.url} target="_blank" className="scroll-link" data-id="events-section">Discover More</a>
                                </div>
                            </div>
                            ) )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Education;
