import React, { FC } from 'react';

interface SubheaderProps {
    highlitedText: string
    text: string
    id: string
}
const Subheader: FC<SubheaderProps> = (props) => {

    return (
        <section className="best-offer" id={props.id}>
            <div className="section-banner-box">
            	<div className="auto-container">
                	<div className="title-box"><h1><span className="bg-text">{props.highlitedText}</span> <span className="lined-text">{props.text}</span></h1></div>
                </div>
            </div>
        </section>
    );
}

export default Subheader;
