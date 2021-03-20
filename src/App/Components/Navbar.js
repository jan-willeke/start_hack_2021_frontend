import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg px-2 px-md-5">
        <NavLink exact to="/" className="navbar-brand">HappiNetwork</NavLink>
        <ul className="navbar-nav">
            <li className="nav-item active"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item active"><NavLink to="/about" className="nav-link">About</NavLink></li>
            <li className="nav-item active"><NavLink to="/me" className="nav-link">Me</NavLink></li>
        </ul>
    </nav>
  );
}
