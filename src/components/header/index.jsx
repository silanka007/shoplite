import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/shoplite.svg'

const Header = () => (
    <header className="header">
        <Link className="logo-wrapper" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
        </div>
    </header>
)
export default Header;