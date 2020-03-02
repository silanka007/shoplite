import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button';
import { addItem } from '../../redux/cart/cart.action';

import {CollectionItemStyled, CollectionItemImageStyled, CollectionItemFooterStyled } from './collection-items.style';

const CollectionItems = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
    <CollectionItemStyled>
        <CollectionItemImageStyled
            style={{
                background:`url(${imageUrl})`
            }}
        />
        <CollectionItemFooterStyled>
            <span>{name}</span>
            <span>${price}</span>
        </CollectionItemFooterStyled>
        <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
    </CollectionItemStyled>
    )}

const mapDispatchToProps = dispatch => {
    return {
        addItem : item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItems);