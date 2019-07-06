import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.js';
import { State } from './types/main.js';

const initial:State = {
  activeNav : 'home',
}

const store = createStore(rootReducer, initial, applyMiddleware(thunk));

export default store;