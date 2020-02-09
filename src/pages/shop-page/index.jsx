import React from 'react';

import './shop.component.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview';


class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...OtherCollectionProps}) => {
                        return <CollectionPreview key={id} {...OtherCollectionProps} />
                    })
                }
            </div>
        )
    }
}
export default ShopPage;