import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router>
        <NavbarLogo> Bookstore CMS</NavbarLogo>
        <NavItems>
          <MenuLinks to="/">BOOKS</MenuLinks>
          <MenuLinks to="/add-books">CATEGORIES</MenuLinks>
        </NavItems>
        <NavbarIcon>{BsPersonCircle}</NavbarIcon>
      </Router>
    </Nav>

  </>
);

export default Navbar;
