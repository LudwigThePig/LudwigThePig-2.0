import * as React from 'react';

const ThemeSelector = () => (
  <ul>
    <li>
      <input type="radio" checked name="theme-opt" value="dark" />
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
)

export default ThemeSelector;