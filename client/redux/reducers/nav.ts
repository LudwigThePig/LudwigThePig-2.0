import Redux, { Action } from 'redux';
import { activeNav } from '../types/main';

const activeNav = 'ACTIVE_NAV'

const navReducer = (state = 'home', action:Action) => {
  switch(action.type) {
    case activeNav:
      return action.message || 'home';
    default:
      return state;
  }
}

export default navReducer;