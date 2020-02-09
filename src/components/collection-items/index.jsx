import React from 'react';

import './collection-items.style.scss';

const CollectionItems = ({name, price, imageUrl}) => (
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
    </div>
)

export default CollectionItems;