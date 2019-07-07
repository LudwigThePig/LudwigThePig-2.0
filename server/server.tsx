
require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT

// Crazy SSR Routing!
import renderer from './renderer';


const app = express();
import { Response, Request, NextFunction } from 'express';

app.use(express.static(path.resolve(__dirname, 'bin')));

app.get('/*', (req: Request, res: Response): void => {

  const htmlPath = path.join(__dirname, 'bin', 'index.html');
  fs.readFile('./bin/index.html', 'utf-8', (err:any, file:any)=> {
    // console.log(file, htmlPath )
    res.send(renderer(file, req.url));
  })
});

app.listen(port, (err: Error) => err 
  ? console.error(err)
  : console.log(`Server listening on port ${port}`)
);