import * as React from 'react';
import { shallow } from 'enzyme';

import About from '../client/pages/about';

it('renders the heading', () => {
    const result = shallow(<About />).contains(<h1>About</h1>);
    expect(result).toBeTruthy();
});