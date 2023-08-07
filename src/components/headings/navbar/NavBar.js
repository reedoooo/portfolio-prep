// NavBar.js
import NavLinks from './NavLinks';
// import { ColorModeButton } from './ColorModeButton';
// import AuthControls from './AuthControls';
// import NavLogoComponent from './NavLogoComponent';
import { NavContainer } from '../../../containers/navbar/NavContainer';

function NavBar() {
  return (
    <NavContainer width="150vw">
      <NavLinks />
    </NavContainer>
  );
}

export default NavBar;
