import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <Link className="active" to='/'>LtP</Link>
    <Link to='/'>about</Link>
    <Link to='/'>projects</Link>
  </nav>
)

export default NavBar;