import { combineReducers } from 'redux';
import nav from './navReducer';

const rootReducer = combineReducers({
  nav
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>
