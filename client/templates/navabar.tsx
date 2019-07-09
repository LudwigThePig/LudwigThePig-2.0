import * as React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <NavLink activeClassName="active" to='/'>LtP</NavLink>
    <NavLink activeClassName="active" to='/about'>about</NavLink>
    <NavLink activeClassName="active" to='/projects'>projects</NavLink>
  </nav>
)

export default NavBar;