import * as React from 'react';
import { store } from '../redux/store';
import Project from './project';
import { project } from '../types';


interface IProjectsState {
  projects: Array<project>
}

interface IProjectsProps {
  projects: Array<project>
}

class Projects extends React.Component <IProjectsProps, IProjectsState>  {

  constructor(props: IProjectsProps) {
    super(props);
    this.state = {
      projects: store.getState().projects.activeProjects
    }
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
        <h1>Projects</h1>
        { projects.map(proj => <Project {...proj} />) }
      </div>
    );
  }
} 
    
export default Projects;