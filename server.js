
require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT

// Crazy SSR Routing!
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './client/index';


const app = express();

app.use(express.static(path.resolve(__dirname, 'bin')));

app.get('*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
});

app.listen(port, (err) => err 
  ? console.error(err)
  : console.log(`Server listening on port ${port}`)
);