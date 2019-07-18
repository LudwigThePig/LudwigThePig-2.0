import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Templates
import Navbar from './navabar'
import Footer from './footer';

// Components
import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';

// Redux
import { store } from '../redux/store';
import { themePayload } from '../redux/types/themeTypes';
import { updateInitialLoad } from '../redux/actions/initialLoadAction';

interface IAppProps {
  compiler: string;
  framework: string;
  staticContext?: any;
}

interface IAppState {
  theme?: themePayload;
  initialLoad?: boolean;
}

export default class App extends React.Component <IAppProps, IAppState> {
  
  constructor(props: IAppProps){
    super(props);
    this.state = {
      theme: store.getState().theme.activeTheme
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        theme: store.getState().theme.activeTheme,
        initialLoad: store.getState().initialLoad.activeInitialLoad
      }, () => {
        if (this.state.initialLoad) {
          store.dispatch(updateInitialLoad(false))
        }
      });
    });
  }

  public render(): JSX.Element {
    const { theme } = this.state;
    return (
      <div className={`theme-${theme}`}>
        <div id="app">
          <Navbar />
          <div className="jumbo">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
          
          <Footer />
        </div>
      </div>
    )
  }
}