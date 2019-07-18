import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);



const Footer = () => (
  <footer className="footer">
    <a href="https://www.linkedin.com/in/morgangalvin">
      <FontAwesomeIcon icon={['fab', 'linkedin']} className='fa' />
    </a>
    <a href="https://github.com/LudwigThePig">
      <FontAwesomeIcon icon={['fab', 'github']} className='fa' />
    </a>
    <a href="https://www.instagram.com/morgandolibre/">
      <FontAwesomeIcon icon={['fab', 'instagram']} className='fa' />
    </a>
    <a href="https://www.strava.com/athletes/5897641">
      <FontAwesomeIcon icon={['fab', 'strava']} className='fa' />
    </a>
  </footer>
)

export default Footer;