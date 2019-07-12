import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from './reducers/root';

export const initialState:AppState = {
  nav: {
    activeNav : 'home',
  },
  theme: {
    activeTheme: 'light'
  },
  initialLoad: {
    activeInitialLoad: true
  }
}
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
