import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
// import { BrowserRouter as Router } from 'react-router-dom';
import {
  Nav,
  NavbarLogo,
  NavItems,
  MenuLinks,
  NavbarIcon,
} from './NavbarElements';

const Navbar = () => (
  <>

    <Nav>
      <NavbarLogo> Bookstore CMS</NavbarLogo>
      <NavItems>
        <MenuLinks to="/">BOOKS</MenuLinks>
        <MenuLinks to="/add-books">CATEGORIES</MenuLinks>
      </NavItems>
      <IconContext.Provider value={{ color: 'blue', size: '2.5rem' }}>
        <NavbarIcon className="global-class-name">
          <BsFillPersonFill />
        </NavbarIcon>
      </IconContext.Provider>
    </Nav>

  </>
);

export default Navbar;
