import Particles from 'react-particles-js';
import * as React from 'react';

const Background = () => (
  <React.Fragment>
    <Particles
    className="background"
    params={{
      polygon: {
        enable: true,
        type: 'inside',
        move: {
          radius: 10
        },
        url: 'path/to/svg.svg'
      }
    }} />
  </React.Fragment>
);

export default Background;