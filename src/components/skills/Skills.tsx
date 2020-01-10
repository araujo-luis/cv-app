import React, { FC } from 'react';
import PieChart from '../charts/PieChart';
import skills from '../../data/skills';

const Skills: FC = () => {


    return (
        <section className="best-offer" id="best-offer-section">
            
            
            <div className="section-banner-box">
            	<div className="auto-container">
                	<div className="title-box"><h1><span className="bg-text">My</span> <span className="lined-text">Skills</span></h1></div>
                </div>
            </div>


            <div className="skills">
                Skills
           </div>
            {skills.map(item => (
                <div className="col-md-3 chart-inline">
                <PieChart data={item.knowledge} title={item.title} />
                </div>
            ))}
        </section>
    );
}

export default Skills;
