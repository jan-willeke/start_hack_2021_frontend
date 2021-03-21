import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../Img/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-2 px-md-5 navbar-expand">
      <NavLink exact to="/" className="navbar-brand"><img src={logo} alt="Logo" className="logo" /></NavLink>
      <ul className="navbar-nav">
        <li className="nav-item active"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
        <li className="nav-item active"><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li className="nav-item active"><NavLink to="/me" className="nav-link">Start</NavLink></li>
        <li className="nav-item active"><NavLink to="/leaderboard" className="nav-link">Team Leaderboard</NavLink></li>
      </ul>
    </nav>
  );
}
