import { Request, Response } from 'express';
import { db } from '../server';

enum Categories {
  'client',
  'typescript',
  'frontend',
  'fullstack',
  'game',
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
      db.any('SELECT * FROM projects')
    }
  }
  
  public postProject(req:Request, res:Response): void{
    const body:PostBody = req.body;
    console.log(req.body, req.query)

    const postKeys:any = Object.keys(body).filter(x => x !== 'categories');
    const postVals = postKeys.map((key:string):any => body[key])

    const FIELDS = postKeys.join(', ');
    const $VALS = postKeys.map((val:string, i: number): any => `$${i + 1}`)
                          .join(', ')

    db.any(`
        INSERT INTO projects 
        (${FIELDS}) VALUES (${$VALS}) RETURNING id;
        ${body.categories.map(cat => 
          `INSERT INTO cat_proj (proj_id, cat_id)
          VALUES (RETURNING id,
          SELECT id FROM categoreies
          WHERE name = ${cat});`
        )}

      `)
      .then(console.log)
      .catch(console.log);
  }

  public deleteProject(req:Request, res:Response): void {

  }
} 

// Test POST query
// {
// 	"name": "Chess",
// 	"description": "A simple game of chess",
// 	"url": "https://www.chess.com/",
// 	"imageUrl": "https://www.chessusa.com/mm5/graphics/00000001/staunton-chess-pieces-category.jpg",
// 	"created": "6th century",
// 	"updated": "yesterday",
// 	"categories": ["game", "typescript"]
//  }