
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  App  from './components/app';
const styles  = require('./main.scss');
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App compiler="TypeScript" framework="React" />, document.getElementById('root'));