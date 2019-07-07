import Redux from 'redux';
import { NavAction, ACTIVE_NAV } from '../types/navTypes';

const navReducer = (state = 'home', action:NavAction) => {
  switch(action.type) {
    case ACTIVE_NAV:
      return { activeNav: action.payload };
    default:
      return state;
  }
}

export default navReducer;