import { Request, Response } from 'express';
import { db } from '../server';

export default class ProjectController {
  public getProjects(req:Request, res:Response): void {
    const query = req.query;

    // If no query
    if (Object.keys(query).length === 0) {      // if no query
      const dbQuery = db.any('SELECT * FROM projects');
      Promise.resolve(dbQuery)
        .then(console.log)
        .catch(console.log)
    } else {                                    // if query
      // find relevant queries

    }
  }
  
  public postProject(req:Request, res:Response): void{

  }

  public deleteProject(req:Request, res:Response): void {

  }
}