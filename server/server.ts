
require('dotenv').config();
import * as express from 'express';
import * as fs from 'fs';
import renderer from './views/renderer';
import apiRouter from './router';
import { Response, Request, NextFunction } from 'express';
import {IMain, IDatabase} from 'pg-promise';
import * as pgPromise from 'pg-promise';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';


// Environmental Variables
const port = process.env.PORT;
const connectionSting = process.env.CONN_STR

//* ESTABLISH DATABASE TCP CONNECTION *//
const pgp: IMain = pgPromise({error(error, e) {
  if (e.cn) {
      console.log('CN:', e.cn);
      console.log('EVENT:', error.message || error);
  }
}});
export const db:IDatabase<any> = pgp(connectionSting);

db.connect()
  .then(data => console.log('connected to the database'))
  .catch(console.log);

  
//* APP SETUP AND MIDDLEWARE *//
const app = express();
  
app.use(bodyParser.json());
app.use(cors());
app.use('/static', express.static('bin'))


//* ROUTES *//
apiRouter(app);

app.get('/*', (req: Request, res: Response): void => {
  fs.readFile('./bin/main.css', 'utf-8', (cssErr:any, css:any)=> {
    fs.readFile('./bin/index.html', 'utf-8', (htmlErr:any, html:any)=> {
      
      if (cssErr || htmlErr) { // aggrigate errors, wrangle them, and send them off
        const errRes = [cssErr, htmlErr]
          .filter(err => err !== undefined)
          .join('\n');
        res.send(errRes);
      }
      res.send( renderer(html, css, req.url) );
    })
  });
});

//* SERVER CONNECTION *//
app.listen(port, (err: Error) => err 
  ? console.error(err)
  : console.log(`Server listening on port ${port}`)
);