import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './navLink.scss';

const NavLink = ({ title, path }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={`${path}`}
        className={`nav-link ${
          path === `${location.pathname}` ? 'active' : ''
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
