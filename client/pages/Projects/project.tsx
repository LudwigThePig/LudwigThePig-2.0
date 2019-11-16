import * as React from 'react';
import { project } from '../../types';

const Project = ({id, name, description, url, image_url, created }: project) => {
  let image: Array<string> | string = image_url.split('/');
  image[image.length - 2] = 'c_scale,w_300'
  image = image.join('/');
  return (
    <div className="project" onClick={() => window.open(url, '_blank')}>
      <img src={`${image}`} alt={name} />
      <h3>
        { name }
        <span>{ created }</span>
      </h3>
      <p>{description}</p>
    </div>
  )
};

export default Project;