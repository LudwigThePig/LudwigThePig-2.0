import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <p>Hello!</p>
    {/* <Link className="active" to='/'>LtP</Link> */}
    {/* <Link to='/about'>about</Link> */}
    {/* <Link to='/projects'>projects</Link> */}
  </nav>
)

export default NavBar;