import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';


import './directory-menu.styles.scss';
import MenuList from '../menu-list';

const  DirectoryMenu = ({sections}) => {
  return(
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuList key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);