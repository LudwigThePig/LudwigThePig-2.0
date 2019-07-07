
require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT

// Crazy SSR Routing!
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './client/templates/app';


const app = express();
import { Response, Request, NextFunction } from 'express';

app.use(express.static(path.resolve(__dirname, 'bin')));

app.get('/*', (req: Request, res: Response): void => {
  const context = {};
  const app = ReactDOMServer.renderToString( // React.createElement(App)
  <StaticRouter location='/' context={context}>
    <App compiler="TypeScript" framework="React" />
  </StaticRouter>
  );
  console.log(app)
  res.send(app)
});

app.listen(port, (err: Error) => err 
  ? console.error(err)
  : console.log(`Server listening on port ${port}`)
);