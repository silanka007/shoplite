import React from 'react';
import { Route } from 'react-router-dom';

// import CollectionPage from '../collection-page';

import ShopOverview from '../../components/shop-overview';

import './shop.style.scss';


const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={match.path} component={ShopOverview} />
        { /* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
    </div>
)

export default ShopPage;