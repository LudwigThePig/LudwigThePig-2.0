import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createMemoryHistory } from 'history';


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
  staticContext?: any;
}

interface IAppState {
  
}

export default class App extends React.Component <IAppProps, IAppState> {
  
  public render(): JSX.Element {
    const history = createMemoryHistory();
    
    return (
      // <Router {...history}>
        <div className="app">
          <div className="jumbo">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
          
          <Navbar />
          <Footer />
        </div>
      // </Router>
    )
  }
}