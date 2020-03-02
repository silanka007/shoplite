import React from 'react';

import CollectionItems from '../collection-items';

import {CollectionPreviewStyled, PreviewTitledStyled, PreviewStyled} from './collection-preview.style'

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewStyled>
        <PreviewTitledStyled>{title.toUpperCase()}</PreviewTitledStyled>
        <PreviewStyled>
        {
            items
                .filter((item, index) => index < 4)
                .map((item) =>(
                <CollectionItems key={item.id} item = {item} />
                ))
        }
        </PreviewStyled>
        
    </CollectionPreviewStyled>
)

export default CollectionPreview;