import React from 'react';

import './navLink.scss';

const NavLink = ({ name }) => {
  return (
    <li>
      <a href='/' className={`nav-link ${name === 'tours' ? 'active' : ''}`}>
        {name}
      </a>
    </li>
  );
};

export default NavLink;
