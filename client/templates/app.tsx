import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// Templates
import Navbar from './navabar'
import Footer from './footer';

// Components
import Home from '../components/home';
import About from '../components/about';
import Projects from '../components/projects';


interface IAppProps {
  compiler: string;
  framework: string;
}

interface IAppState {

}

export default class App extends React.Component <IAppProps, IAppState> {

  render() {
    return (
      <Router>

      <div className="app">
        <div className="jumbo">
          <Route component={Home} />
          {/* <h1 className="logo">This is not<br/>a homepage</h1> */}
        </div>
          <Navbar />
          <Footer />
      </div>
      
      </Router>
    )
  }
}