import * as React from 'react';
import Navbar from './navabar'
import Footer from './footer';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface IAppProps {
  compiler: string;
  framework: string;
}

interface IAppState {

}

export default class App extends React.Component <IAppProps, IAppState> {

  render() {
    return (
      <div className="app">
        <div className="jumbo">
          <h1>Welcome to<br/>LudwigThePig</h1>
        </div>
          <Navbar />
          <Footer />
      </div>
    )
  }
}