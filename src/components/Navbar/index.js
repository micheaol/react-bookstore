import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import {
  Nav,
  NavbarLogo,
  NavItems,
  MenuItems,
  NavbarIcon,
} from './NavbarElements';

const Navbar = () => (
  <>
    <Nav>
      <NavbarLogo> Bookstore CMS</NavbarLogo>
      <NavItems>
        <MenuItems>BOOKS</MenuItems>
        <MenuItems>CATEGORIES</MenuItems>
      </NavItems>
      <NavbarIcon>{BsPersonCircle}</NavbarIcon>
    </Nav>
  </>
);

export default Navbar;
