import { combineReducers } from 'redux';
import nav from './navReducer';
import theme from './themeReducer';
import initialLoad from './initialLoadReducer';
import projects from './projectReducer';

const rootReducer = combineReducers({
  nav,
  theme,
  initialLoad,
  projects
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>
