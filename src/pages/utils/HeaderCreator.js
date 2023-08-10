import ReusableHeader from './ReusableHeader';

/* eslint-disable */
const HeaderCreator = (type) => {
  switch (type) {
    case 'profile':
      return <ReusableHeader headerText="Profile" height={'5vh'} />;
    case 'about':
      return <ReusableHeader headerText="About Me" height={'5vh'} />;
    case 'projects':
      return <ReusableHeader headerText="Projects" color="white" />;
    case 'resume':
      return <ReusableHeader headerText="Resume" />;
    case 'techSkills':
      return <ReusableHeader headerText="Tech Skills" color="white" />;
    case 'experiences':
      return <ReusableHeader headerText="Experience" color="white" />;
    default:
      return null;
  }
};

export default HeaderCreator;
