
require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT

// Crazy SSR Routing!
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import App from '../client/templates/app';
import renderer from './renderer';


const app = express();
import { Response, Request, NextFunction } from 'express';

app.use(express.static(path.resolve(__dirname, 'bin')));

app.get('/*', (req: Request, res: Response): void => {

  const htmlPath = path.resolve(__dirname, 'bin', 'index.html');
  fs.readFile(htmlPath, 'utf-8', (err:any, file:any)=> {
    res.send(renderer(file));
  })
  // res.send(app)
});

app.listen(port, (err: Error) => err 
  ? console.error(err)
  : console.log(`Server listening on port ${port}`)
);