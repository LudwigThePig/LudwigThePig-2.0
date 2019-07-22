import { combineReducers } from 'redux';
import nav from './navReducer';
import theme from './themeReducer';
import initialLoad from './initialLoadReducer';
import projects from './projectReducer';
import exitAnimation from './exitAnimationReducer'

const rootReducer = combineReducers({
  nav,
  theme,
  initialLoad,
  projects,
  exitAnimation
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>
