import * as React from 'react';

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
          Hello World!
      </div>
    )
  }
}