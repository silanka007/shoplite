import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button';
import { addItem } from '../../redux/cart/cart.action';

import './collection-items.style.scss';

const CollectionItems = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
    <div className="collection-items">
        <div className="image"
            style={{
                background:`url(${imageUrl})`
            }}
        />
        <div className="collection-item-footer">
            <span>{name}</span>
            <span>${price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
    </div>
    )}

const mapDispatchToProps = dispatch => {
    return {
        addItem : item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItems);