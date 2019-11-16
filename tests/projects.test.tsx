import * as React from 'react';
import { shallow } from 'enzyme';

import Projects from '../client/pages/Projects';

const proj = {  
  id: 1,
  name: 'test',
  description: 'with a description',
  url: 'https://google.com',
  image_url: 'https://google.com',
  created: Date.now().toString(),
  categories: ['client']}

it('renders the heading', () => {
    const result = shallow(<Projects projects={[proj]} />).contains(<h1>Projects</h1>);
    expect(result).toBeTruthy();
});