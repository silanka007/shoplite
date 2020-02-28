import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollections } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview';

import './shop-overview.style.scss';

const ShopOverview = ({ collections }) => {
    return (
        <div className = "shop-overview">
            {
                collections.map(({id, ...OtherCollectionProps}) => {
                    return <CollectionPreview key={id} {...OtherCollectionProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollections
})

export default connect(mapStateToProps)(ShopOverview);