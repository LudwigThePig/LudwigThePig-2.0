import { IThemeAction, themePayload, ACTIVE_THEME } from '../types/themeTypes'

interface ThemeState {
  activeTheme: themePayload;
}

const initialState:ThemeState = {
  activeTheme : 'light',
}

const themeReducer = (state = initialState, action:IThemeAction): ThemeState => {
  switch(action.type) {
    case ACTIVE_THEME:
      return { activeTheme: action.payload };
    default:
      return state;
  }
}

export default themeReducer;