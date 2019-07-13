import { Request, Response } from 'express';
import { db } from '../server';

enum Categories {
  client,
  typescript,
  frontend,
  fullstack,
  game,
}

interface PostBody {
  name: string;
  description?: string;
  url: string;
  imageUrl?: string;
  created: string;
  updated?: string;
  categories: Array<Categories>;
  [key: string]: any;

}

export default class ProjectController {
  public getProjects(req:Request, res:Response): void {
    const query = req.query;

    // // If no query
    if (Object.keys(query).length === 0) {      // if no query
      db.any('SELECT * FROM projects')
        .then(data => res.send(data))
        .catch(console.log);
    } else {                                    // if query
      // find relevant queries

    }
  }
  
  public postProject(req:Request, res:Response): void{
    const body:PostBody = req.body;

    const postKeys:any = Object.keys(body).filter(x => x !== 'categories');
    const postVals = postKeys.map((key:string):any => body[key])
    // variables for insert statement.
    // eg. INSERT INTO table (name, feet, age) VALUES ($1, $2, $3)
    const FIELDS = postKeys.join(', ');
    const $VALS = postKeys.map((val:string, i: number): any => `$${i + 1}`)
                                   .join(', ')

    let categories;

    db.any('SELECT * FROM categories')
      .then(data => {
        categories = data;
        db.any(`INSERT INTO projects 
        (${FIELDS}) VALUES ${$VALS} `, );
      })
      .catch(err => console.log(err));
  }

  public deleteProject(req:Request, res:Response): void {

  }
} 