import React from 'react';

import './collection-preview.style.scss';
import CollectionItems from '../collection-items';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
        {
            items
                .filter((item, index) => index < 4)
                .map((item) =>(
                <CollectionItems key={item.id} item = {item} />
                ))
        }
        </div>
        
    </div>
)

export default CollectionPreview;