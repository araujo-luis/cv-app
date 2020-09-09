import React, { FC } from 'react';
import portfolio from '../../data/portfolio';
const Portfolio: FC = () => {
    return (
        <section className="best-offer" id="best-offer-section">

            <div className="portfolio container">
                <div className="row">
                    {portfolio.data.map(item => (
                        <div key={item.id} className="col-xs-1 col-md-6 col-lg-4 center d-flex align-items-stretch">
                            <div className="tile">

                                <h3 className="tile-title">{item.title}</h3>
                                <div className="content-skills">
                                    {item.tools.map((tool, index) => (
                                        <button key={index}>{tool}</button>
                                    ))}
                                </div>
                                <hr />
                                <p dangerouslySetInnerHTML={{ __html: item.description }} className="description-portfolio"></p>
                                <div className="more-info">
                                    <a href={item.url}
                                        className="btn btn-primary btn-large btn-block"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        More information
                                    </a>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
