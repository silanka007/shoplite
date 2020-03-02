import React from "react";
import { withRouter } from "react-router-dom";

import {MenuItemsStyled, BackgroundImageStyled, ContentStyled, ContentTitleStyled, ContentSubTitleStyled} from './menu-list.styles'

const MenuList = ({ title, imageUrl, size, linkUrl, history, match}) => (
    <MenuItemsStyled size = {size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageStyled className="onHover-image" imageUrl={imageUrl} />
        <ContentStyled className="onHover-content">
            <ContentTitleStyled>{title.toUpperCase()}</ContentTitleStyled>
            <ContentSubTitleStyled>SHOP NOW</ContentSubTitleStyled>
        </ContentStyled>
    </MenuItemsStyled>
);

export default withRouter(MenuList);
