import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from './reducers/root.js';

export const initialState:AppState = {
  nav: {
    activeNav : 'home'
  },
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;