import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Voice Assistant</h1>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item"><a href="/" className="header__link">Home</a></li>
                        <li className="header__item"><a href="/" className="header__link">Features</a></li>
                        <li className="header__item"><a href="/" className="header__link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
