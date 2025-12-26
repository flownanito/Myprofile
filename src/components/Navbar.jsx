import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-name">nauzet-sanchez</span>
      </div>
      <div className="navbar-center">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>_bienvenido</NavLink>
        <NavLink to="/about-me" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>_sobre-mi</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>_proyectos</NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/contact-me" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>_contacto</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
