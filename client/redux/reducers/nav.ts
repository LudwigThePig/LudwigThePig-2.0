import Redux from 'redux';
import { NavAction, ACTIVE_NAV } from '../types/main';

const navReducer = (state = 'home', action:NavAction) => {
  switch(action.type) {
    case ACTIVE_NAV:
      return action.payload || 'home';
    default:
      return state;
  }
}

export default navReducer;