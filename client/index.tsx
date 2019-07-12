
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/store';


import  App  from './components/app';
const styles  = require('./main.scss');



ReactDOM.hydrate(
  <Provider store={store}>
      <BrowserRouter>
        <App compiler="TypeScript" framework="React" />
      </BrowserRouter> 
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();