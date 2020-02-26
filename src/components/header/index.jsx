import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { selectcartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/shoplite.svg'
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

const Header = ({ currentUser, isHidden  }) => (
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
            <CartIcon />   
        </div>
        {
            isHidden ? null :
            (<CartDropdown />)
        }
        
    </header>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectcartHidden
})

export default connect(mapStateToProps)(Header);
