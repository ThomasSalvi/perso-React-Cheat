import React from 'react';
import './styles.scss';

const Header = () => (
  <header className="menu">
    <h1>React Cheat sheet</h1>
    <nav className="menu-wrap">
      <a className="menu-link" href="">React</a>
      <a className="menu-link" href="">WordPress</a>
      <a className="menu-link" href="">Symfony</a>
    </nav>
  </header>
);

export default Header;
