import { Application } from "express";
import Project from'./controllers/projects';

const project = new Project;

export default (app: Application) => {
  app.route('/api/v1/projects*')
    .get(project.getProjects)
    .post(project.postProject)
    .delete(project.deleteProject);   
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