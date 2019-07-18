import * as React from 'react';
import { project } from '../types';

const Project = ({id, name, description, url, image_url, created }: project) => (
  <div className="project" onClick={() => window.open(url, '_blank')}>
    <img src={`${image_url}`} alt={name} />
    <h3>
      { name }
      <span>{ created }</span>
    </h3>
    <p>{description}</p>
  </div>
);

export default Project;