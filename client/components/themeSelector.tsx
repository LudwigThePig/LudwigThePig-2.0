import * as React from 'react';

import { store } from '../redux/store';
import { updateNav } from '../redux/actions/themeAction';
import { render } from 'react-dom';
import { themePayload } from '../redux/types/themeTypes';
import { navPayload } from '../redux/types/navTypes';

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

  private handleChange(e: any): void {
    const theme = e.target.value;
    this.setState({
      theme: theme
    })
    store.dispatch(updateNav(theme));
  } 

  render() {
    const { theme } = this.state;
    const getThemeIcon = () => {
      switch (theme) {
        case 'light':
          return <span role="img" aria-label="light-theme">🌞</span>;
        case 'blue':
          return <span role="img" aria-label="blue-theme">🌊</span>
          default:
              return <span role="img" aria-label="dark-theme">🌚</span>;   
      }
    }
    return (
        <ul>
         {/* RADIO BUTTONS FOR DESKTOP */}
          <li>
            <input 
              type="radio" 
              checked={theme === 'dark'}
              name="theme-opt" 
              onChange={this.handleChange}
              onClick={this.handleChange} 
              value="dark" 
              />
            <label><span role="img" aria-label="dark-theme">🌚</span></label>
          </li>

          <li>
            <input 
              type="radio" 
              checked={theme === 'light'}
              name="theme-opt" 
              onChange={this.handleChange}
              onClick={this.handleChange} 
              value="light" 
            />
            <label><span role="img" aria-label="light-theme">🌞</span></label>
          </li>

          <li>
            <input 
              type="radio" 
              checked={theme === 'blue'}
              name="theme-opt" 
              onChange={this.handleChange}
              onClick={this.handleChange} 
              value="blue" 
              />
            <label><span role="img" aria-label="blue-theme">🌊</span></label>
          </li>

          {/* BUTTON FOR MOBILE */}
          <button onClick={() =>{}}>{ getThemeIcon() }</button>

        </ul>
    );
  } 
}
  
  export default ThemeSelector;