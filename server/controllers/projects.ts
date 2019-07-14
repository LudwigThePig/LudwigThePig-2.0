import { Request, Response } from 'express';
import { db } from '../server';
import { IPostBody } from './projectTypes';

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
    const body:IPostBody = req.body;
    const postKeys:any = Object.keys(body).filter(x => x !== 'categories');
    const postVals = postKeys.map((key:string):any => body[key])

    const FIELDS = postKeys.join(', ');
    const $VALS = postKeys.map((val:string, i: number): any => `$${i + 1}`)
                          .join(', ');

    const query = `
      WITH new_proj AS (INSERT INTO projects 
      (${FIELDS}) VALUES (${$VALS}) RETURNING id)

      INSERT INTO cat_proj (proj_id, cat_id)
      ${body.categories.map(cat => 
        `SELECT p.id, c.id FROM new_proj p, categories c
         WHERE c.name='${cat}'`
      ).join('\r\nUNION ALL\r\n')};
    `
    db.any(query, postVals)
      .then(data => res.send(`Project succesfully posted\n${JSON.stringify(body)}`))
      .catch(err => res.send(err));
  }

  public putProject(req:Request, res:Response): void {
    
  }

  public deleteProject(req:Request, res:Response): void {
    const { id } = req.body;
    const query = `
      DELETE FROM projects p
      USING cat_proj j
      WHERE p.id=${id}
      AND j.proj_id=${id};
    `
    db.any(query)
      .then(data => res.send(data))
      .catch(console.log)
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