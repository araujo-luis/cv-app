import React, { FC, useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navigation: FC = () => {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = (mediaQuery: any) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <img className="Logo" alt="logo" />
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <AnchorLink href='#my-resume'>My Resume</AnchorLink>
                    <AnchorLink href='#my-skills'>My Skills</AnchorLink>
                    <AnchorLink href='#my-portfolio'>My Portfolio</AnchorLink>
                    <AnchorLink href='#contact-me'>Contact Me</AnchorLink>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>

    );
}

export default Navigation;
