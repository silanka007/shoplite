import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-items';

import {CollectionPageStyled, CollectionTitleStyled, CollectionItemsListingStyled} from './collection-page.style';


const CollectionPage = ({collection}) => {
    const { title, items } = collection;
    return (
        <CollectionPageStyled>
            <CollectionTitleStyled>{title}</CollectionTitleStyled>
            <CollectionItemsListingStyled>
                {
                    items.map( item => (<CollectionItem key={item.id}  item={item}/>))
                }
            </CollectionItemsListingStyled>
        </CollectionPageStyled>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection : selectCollection(ownProps.match.params.collectionId)(state)
    }
}
export default connect(mapStateToProps)(CollectionPage);