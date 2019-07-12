
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store, persistor  } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


import  App  from './components/app';
const styles  = require('./main.scss');



ReactDOM.hydrate(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App compiler="TypeScript" framework="React" />
      </BrowserRouter> 
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();