import * as React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ThemeSelector from './themeSelector';

const NavBar = () => (
  <div className="navbar">
    <ThemeSelector />
    <nav>
      <NavLink activeClassName="active" exact={true} to='/'>LtP</NavLink>
      <NavLink activeClassName="active" to='/about'>about</NavLink>
      <NavLink activeClassName="active" to='/projects'>projects</NavLink>
    </nav>
  </div>
)

export default NavBar;