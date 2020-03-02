import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuList from '../menu-list';

import {DirectoryMenuStyled} from './directory-menu.style'

const  DirectoryMenu = ({sections}) => {
  return(
    <DirectoryMenuStyled>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuList key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuStyled>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);