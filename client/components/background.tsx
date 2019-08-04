import Particles from 'react-particles-js';
import * as React from 'react';

const Background = () => (
  <React.Fragment>
    <Particles
      className="particle-background"
      width="100vw"
      height="100vh"
      params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: "#3CA9D1",
              blur: 5
            }
          }
        }
      }}
      style={{
        width: '100%',
      }}
    />  
  </React.Fragment>
);

export default Background;