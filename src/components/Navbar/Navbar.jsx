import React from 'react';

import './navbar.scss';

import logo from '../../logo.svg';

import { navLinks } from '../../tourData.js';

import NavLink from '../NavLink/NavLink';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='cirty tours company' />
      <ul className='nav-links'>
        {navLinks.map(({ id, title }) => (
          <NavLink key={id} name={title} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
