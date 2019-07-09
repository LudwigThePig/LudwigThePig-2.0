import * as React from 'react';

import store from '../redux/store';
import { updateNav } from '../redux/actions/themeAction';
import { render } from 'react-dom';
import { themePayload } from '../redux/types/themeTypes';

interface IThemeSelectorState {
  theme: themePayload
}

class ThemeSelector extends React.Component <{}, IThemeSelectorState>{

  constructor(props:{}) {
    super(props);

    this.state = {
      theme: store.getState().theme.activeTheme
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    console.log('hello')
    const theme = 'blue';
    store.dispatch(updateNav(theme));
  } 

  render() {
    
    return (
        <ul >
          <li>
            <input type="radio" checked name="theme-opt" onClick={this.handleChange} onChange={this.handleChange} value="dark" />
            <label><span role="img" aria-label="dark-theme">🌚</span></label>
          </li>
          
          <li>
            <input type="radio" name="theme-opt" value="light" />
            <label><span role="img" aria-label="light-theme">🌞</span></label>
          </li>
          
          <li>
            <input type="radio" name="theme-opt" value="dark" />
            <label><span role="img" aria-label="blue-theme">🌊</span></label>
          </li>
        </ul>
    );
  } 
}
  
  export default ThemeSelector;