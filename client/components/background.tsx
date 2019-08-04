import Particles from 'react-particles-js';
import * as React from 'react';
import { themePayload } from '../redux/types/themeTypes';

interface IBackgroundProps {
  theme: themePayload
}


const Background:React.FC<IBackgroundProps> = ({theme}) => {
  const themes = {
    dark: {
      primary: '#001011', 
      secondary: '#F2F2E6'
    },
    light: {
      primary: '#f9f3ed', 
      secondary: '#342e37'
    },
    blue:{
      primary: '#323846', 
      secondary: '#fbf9f3'
    }
  }
  const { primary, secondary } = themes[theme];
  return (
    <React.Fragment>
      <Particles
        className="particle-background"
        width="100vw"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 204,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: secondary
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 7,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 500,
              color: '#ffffff',
              opacity: 0.4,
              width: 2
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'bottom',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
        style={{
          background: primary,
          width: '100%',
        }}
      />  
    </React.Fragment>
  );
}
export default Background;