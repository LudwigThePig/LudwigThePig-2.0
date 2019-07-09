
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

app.get('/static', express.static(path.resolve(__dirname, 'bin')))

app.get('/*', (req: Request, res: Response): void => {
  fs.readFile('./bin/main.css', 'utf-8', (cssErr:any, css:any)=> {
    fs.readFile('./bin/index.html', 'utf-8', (htmlErr:any, html:any)=> {
      
      if (cssErr || htmlErr) {
        const errRes = [cssErr, htmlErr]
          .filter(err => err !== undefined)
          .join('\n');
        res.send(errRes)
      }

      res.send( renderer(html, css, req.url) );
    })
  });
});

app.listen(port, (err: Error) => err 
  ? console.error(err)
  : console.log(`Server listening on port ${port}`)
);