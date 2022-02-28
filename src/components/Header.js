import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navItems = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <header className="nav-head">
      <h1 className="title">Math Magicians</h1>
      <nav>
        <ul className="menu">
          {
                        navItems.map((navItems) => (
                          <li key={navItems.id}>
                            <NavLink to={navItems.path} className="menulinks">{navItems.text}</NavLink>
                          </li>
                        ))
                    }
        </ul>
      </nav>

    </header>
  );
};

export default Header;
