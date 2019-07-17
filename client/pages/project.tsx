import * as React from 'react';
import { project } from '../types';

const Project = ({id, name, description, url, image_url, created }: project) => (
  <div className="project">
    <img src={`${image_url}`} alt={name} />
    <h3>{ name }</h3>
    <p>{description}</p>
    <div className="project-details">
      <a href={ url }>See More</a>
      <span>{ created }</span>
    </div>

  </div>
);

export default Project;