import React, { FC } from 'react';
const NotFound: FC = () => {

    return (
        <div className="not-found-container">
        <div className="error-container">
            <h1>404</h1>
            <p className="return">Take me back to <a href="/">luisaraujo.io</a></p>
        </div>
        </div>

    );
}

export default NotFound;
