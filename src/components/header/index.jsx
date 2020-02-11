import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/shoplite.svg'

const Header = ({ currentUser }) => (
    <header className="header">
        <Link className="logo-wrapper" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={ () => auth.signOut() }>Sign Out</div>
                :
                    <Link className="option" to="/signin">
                        SIGN in/SIGN UP
                    </Link>
            }
            
        </div>
    </header>
)
export default Header;