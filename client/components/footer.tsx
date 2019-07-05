import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => (
  <footer className="footer">
    <a href="https://www.linkedin.com/in/morgangalvin">
      <FontAwesomeIcon icon={['fab', 'linkedin']} className='fa' size="3x" />
    </a>
    <a href="https://github.com/LudwigThePig">
      <FontAwesomeIcon icon={['fab', 'github']} className='fa' size="3x" />
    </a>
    <a href="https://codepen.io/moegain/">
      <FontAwesomeIcon icon={['fab', 'codepen']} className='fa'  size="3x" />
    </a>
    <a href="https://www.instagram.com/morgangalvinphoto/">
    <FontAwesomeIcon icon={['fab', 'instagram']} className='fa' size="3x" />
    </a>
    <a href="https://www.strava.com/athletes/5897641">
    <FontAwesomeIcon icon={['fab', 'strava']} className='fa' size="3x" />
    </a>
    <br /> <br />
  </footer>
)

export default Footer;