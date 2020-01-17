import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faDev } from '@fortawesome/free-brands-svg-icons';
const SocialIcons: FC = (props) => {
    return (
        <ul className="social-icons">
            <li><a href="https://www.linkedin.com/in/l222p/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/l222p" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://dev.to/l222p" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faDev} /></a></li>
        </ul>
    );
}

export default SocialIcons;