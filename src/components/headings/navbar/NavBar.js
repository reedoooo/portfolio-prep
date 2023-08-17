// NavBar.js
import NavLinks from './NavLinks';
import { NavContainer } from '../../../containers/navbar/NavContainer';

function NavBar() {
  return (
    <NavContainer width="100%">
      <NavLinks />
    </NavContainer>
  );
}

export default NavBar;
