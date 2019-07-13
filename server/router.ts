import { Application } from "express";
import Project from'./controllers/projects';
import * as fs from 'fs';
import * as path from 'path';
import { Response, Request, NextFunction } from 'express';
import renderer from './renderer';

const project = new Project;

export default (app: Application) => {
  app.route('/api/v1/projects*')
    .get(project.getProjects)
    .post(project.postProject)
    .delete(project.deleteProject);

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
}

/**
 * 
 * shape of api v1
 * 
 * things users can get
  * list of categories
  * items
  *    by category
  *    by limit
  *    by order
  *      date created
  *      date updated
  *    alphabetically
  *  a single project
 * 
 * 
 *  tables
 * 
 * 
 */