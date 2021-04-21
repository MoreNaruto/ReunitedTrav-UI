import React from 'react';
import { Link } from 'react-router-dom';

function NavLink(props) {
  return (
    <li className="navItem">
      <Link {...props} style={{ color: 'inherit' }} />
    </li>
  );
}

export default NavLink;
