import React, { FC } from 'react';
import portfolio from '../../data/portfolio';
const Portfolio: FC = () => {
    return (
        <section className="best-offer" id="best-offer-section">
            <div className="container">
                <main className="grid">
                    {portfolio.data.map(item => (
                        <article key={item.id}>
                            <img src="https://picsum.photos/g/600/400?image=1083" alt="Sample test" />
                            <i className="fa fa-html5"></i>
                            <div className="text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Here's why</a>
                            </div>
                        </article>
                    ))}

                  
                </main>
            </div>
        </section>
    );
}

export default Portfolio;
