import { combineReducers } from 'redux';
import nav from './navReducer';
import theme from './themeReducer'

const rootReducer = combineReducers({
  nav,
  theme
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>
