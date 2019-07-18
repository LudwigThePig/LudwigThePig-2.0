import * as React from 'react';

import { store } from '../redux/store';
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

    this.updateTheme = this.updateTheme.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  private updateTheme(theme: themePayload): void {
    this.setState({
      theme: theme
    })
    store.dispatch(updateNav(theme));
  }

  private handleRadioChange(e: any): void {
    const theme = e.target.value;
    this.updateTheme(theme);
  } 

  private handleButtonPress(e: any): void {
    const { theme } = this.state;
    let newTheme:themePayload = theme === 'dark' ? 'light' : theme === 'light' ? 'blue' : 'dark';
    this.updateTheme(newTheme);
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
              onChange={this.handleRadioChange}
              onClick={this.handleRadioChange} 
              value="dark" 
              />
            <label><span role="img" aria-label="dark-theme">🌚</span></label>
          </li>

          <li>
            <input 
              type="radio" 
              checked={theme === 'light'}
              name="theme-opt" 
              onChange={this.handleRadioChange}
              onClick={this.handleRadioChange} 
              value="light" 
            />
            <label><span role="img" aria-label="light-theme">🌞</span></label>
          </li>

          <li>
            <input 
              type="radio" 
              checked={theme === 'blue'}
              name="theme-opt" 
              onChange={this.handleRadioChange}
              onClick={this.handleRadioChange} 
              value="blue" 
              />
            <label><span role="img" aria-label="blue-theme">🌊</span></label>
          </li>

          {/* BUTTON FOR MOBILE */}
          <button onClick={this.handleButtonPress}>{ getThemeIcon() }</button>

        </ul>
    );
  } 
}
  
  export default ThemeSelector;