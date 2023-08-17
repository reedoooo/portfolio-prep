import React from 'react';
import ReusableHeader from './ReusableHeader';
import ReusableHeaderWithSubHeader from './ReusableHeaderWithSubHeader';

/* eslint-disable */
const HeaderCreator = (type, props = {}) => {
  switch (type) {
    // case 'profile':
    //   return <ReusableHeader {...props} headerText="Profile" />;
    case 'profileWithSub':
      return <ReusableHeaderWithSubHeader {...props} headerText="Profile" />;
    case 'about':
      return <ReusableHeader {...props} headerText="About Me" />;
    case 'projects':
      return <ReusableHeader {...props} headerText="Projects" />;
    case 'resume':
      return <ReusableHeader {...props} headerText="Resume" />;
    case 'experiences':
      return <ReusableHeader {...props} headerText="Experience" />;
    case 'techSkills':
      return <ReusableHeader {...props} headerText="Tech Skills" />;
    case 'techSkillsWithSub':
      return (
        <ReusableHeaderWithSubHeader {...props} headerText="Tech Skills" />
      );
    default:
      return null;
  }
};

export default HeaderCreator;
