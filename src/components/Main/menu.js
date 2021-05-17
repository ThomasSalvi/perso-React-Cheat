import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Menu = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <NavLink exact to="/principal">Composant principal <span className="fct">F</span> <span>C</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/props">Validation de props <span className="fct">F</span> <span>C</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/bind">Bind this <span>C</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/find">array.find() <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/map">array.map() <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/ternaire">Condition ternaire <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/vue-conditionnelle">Vue conditionnelle <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/memo">React.memo <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/router">Router <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/link">Link, NavLink <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/states">useState <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/useLocation">useLocation, useParam <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/event">event (onClick, onSubmit) <span className="fct">F</span></NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink exact to="/scss">scss <span className="fct">F</span></NavLink>
      </li>
    </ul>
  </nav>
);

export default Menu;
