import ReusableHeader from '../../components/headings/header/ReusableHeader';

/* eslint-disable */
const HeaderCreator = (type) => {
  switch (type) {
    case 'profile':
      return <ReusableHeader headerText="Profile Section" height={'5vh'} />;
    case 'projects':
      return <ReusableHeader headerText="Projects Section" color="white" />;
    case 'resume':
      return <ReusableHeader headerText="Resume Section" />;
    case 'techSkills':
      return <ReusableHeader headerText="Tech Skills" color="white" />;
    case 'experiences':
      return <ReusableHeader headerText="Experiences" color="white" />;
    default:
      return null;
  }
};

export default HeaderCreator;
