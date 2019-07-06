require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT;


import { Response, Request, NextFunction } from 'express';
const app = express();

app.use(express.static(path.resolve(__dirname, 'bin')));

app.get('*', (req: Request, res: Response) => {
  console.log('old')
  res.redirect('/');
})

app.listen(port, (err:Error) => err 
  ? console.error(err)
  : console.log(`Server listening on port ${port}`)
);