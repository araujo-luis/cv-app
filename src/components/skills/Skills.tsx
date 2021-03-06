import React, { FC } from 'react';
import PieChart from '../charts/PieChart';
import skills from '../../data/skills';
const Fade = require('react-reveal/Fade');

const Skills: FC = () => {
    return ( 
        <section className="best-offer" id="best-offer-section">

            <div className="container">
                <div className="row">
                    {skills.map((item, index) => (
                         <Fade key={index} top opposite>
                        <div className=" col-xs-12 col-sm-4 col-md-4 col-lg-4 skillsArea chart-inline">
                            <div className=" col-xs-12 col-md-6 col-lg-6 skills">
                                <PieChart value={item.value} title={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            </div>
                        </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
