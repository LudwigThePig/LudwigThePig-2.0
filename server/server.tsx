
require('dotenv').config();
import * as express from 'express';
import * as fs from 'fs';
import renderer from './renderer';
import apiRouter from './router';
import { Response, Request, NextFunction } from 'express';
import {IMain, IDatabase} from 'pg-promise';
import * as pgPromise from 'pg-promise';

// Environmental Variables
const port = process.env.PORT;
const connectionSting = process.env.CONN_STR

// database conn
const pgp: IMain = pgPromise({error(error, e) {
  if (e.cn) {
      console.log('CN:', e.cn);
      console.log('EVENT:', error.message || error);
  }
}});
export const db:IDatabase<any> = pgp(connectionSting)

const app = express();

app.use('/static', express.static('bin'))

apiRouter(app);

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