import React from "react";
import "./Header.scss";

import Container from "../Container/Container";
import { useDarkModeContext, useDarkModeToggleContext } from "../../context/darkModeContext";

const Header: React.FC = () => {
    const toggleDarkMode = useDarkModeToggleContext();
    const isDarkMode = useDarkModeContext();

    return (
        <header className="header">
            <Container>
                <div className="header__content">
                    <p className="header__title">Where in the world?</p>
                    <button className="header__button" onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z" fill="white"/> </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z" fill="white" stroke="#111517"/> </svg>
                        )}
                        Dark Mode
                    </button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
