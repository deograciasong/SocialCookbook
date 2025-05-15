import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Optional if you're using CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Social Cookbook</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;