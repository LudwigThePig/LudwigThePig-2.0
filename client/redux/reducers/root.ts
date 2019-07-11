import { combineReducers } from 'redux';
import nav from './navReducer';
import theme from './themeReducer';
import initialLoad from './initialLoadReducer';

const rootReducer = combineReducers({
  nav,
  theme,
  initialLoad
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>
