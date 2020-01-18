import React, { FC } from 'react';
import portfolio from '../../data/portfolio';
const Portfolio: FC = () => {
    return (
        <section className="best-offer" id="best-offer-section">

            <div className="row portfolio">
                <ul className="surveys grid">
                {portfolio.data.map(item => (
                    <div key={item.id} className="col-md-10 col-lg-8 center">
                        <li className="survey-item">

                            <span className="survey-country list-only">
                                UK
    </span>

                            <span className="survey-name">
                                {item.title}
    </span>
    <div className="content-skills">
                                                    {item.tools.map((tool, index) => (
                                                        <button key={index}>{tool}</button>
                                                    ))}
                                                </div>

                            <div className="pull-right">

                                <span className="survey-progress">
                                    <span className="survey-progress-bg">
                                        <span className="survey-progress-fg" style={{ width: "88%" }}></span>
                                    </span>

                                    <span className="survey-progress-labels">
                                   

                                        <span className="survey-completes">
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="">More information</a>
          </span>
                                    </span>
                                </span>

                                <span className="survey-end-date ended">
                                    {item.description}
      </span>
                                <span className="survey-stage">
                                    <span className="stage draft">Draft</span>
                                    <span className="stage awarded">Awarded</span>
                                    <span className="stage live">Live</span>
                                    
                                </span>
                            </div>
                        </li>
                    </div>
                   
                   ))}
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
