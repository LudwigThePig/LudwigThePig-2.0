
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  App  from './templates/app';
const styles  = require('./main.scss');
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.hydrate(
  <BrowserRouter>
    <App compiler="TypeScript" framework="React" />
  </BrowserRouter>, 
  document.getElementById('root')
);

registerServiceWorker();