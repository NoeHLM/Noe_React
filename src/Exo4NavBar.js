import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className={location.pathname === '/' }>
          <Link to="/">Accueil</Link>
        </li>
        <li className={location.pathname === '/profil'}>
          <Link to="/profil">Profil</Link>
        </li>
        <li className={location.pathname === '/contact' }>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
