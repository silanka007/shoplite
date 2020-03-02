import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { selectcartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/shoplite.svg'
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

import {HeaderStyled, LogoWrapperStyled,OptionsStyled, OptionLinkStyled} from './header.style';

const Header = ({ currentUser, isHidden  }) => (
    <HeaderStyled>
        <LogoWrapperStyled to="/">
            <Logo />
        </LogoWrapperStyled>
        <OptionsStyled>
            <OptionLinkStyled to="/shop">
                SHOP
            </OptionLinkStyled>
            {
                currentUser ?
                    <OptionLinkStyled as="div" onClick={ () => auth.signOut() }>Sign Out</OptionLinkStyled>
                :
                    <OptionLinkStyled to="/signin">
                        SIGN in/SIGN UP
                    </OptionLinkStyled>
            }
            <CartIcon />   
        </OptionsStyled>
        {
            isHidden ? null :
            (<CartDropdown />)
        }
        
    </HeaderStyled>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectcartHidden
})

export default connect(mapStateToProps)(Header);
