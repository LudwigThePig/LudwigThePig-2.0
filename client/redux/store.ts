import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from './reducers/root';

export const initialState:AppState = {
  nav: {
    activeNav : 'home',
  },
  theme: {
    activeTheme: 'light'
  }
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;