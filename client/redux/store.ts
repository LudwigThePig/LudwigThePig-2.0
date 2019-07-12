import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from './reducers/root';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

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

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
export const persistor  = persistStore(store);