import Redux from 'redux';
import { NavAction, ACTIVE_NAV, navPayload } from '../types/navTypes';
import { State } from '../types/main';

interface NavState {
  activeNav: navPayload;
}

const initialState:NavState = {
  activeNav : 'home',
}

const navReducer = (state = initialState, action:NavAction): NavState => {
  switch(action.type) {
    case ACTIVE_NAV:
      return { activeNav: action.payload };
    default:
      return state;
  }
}

export default navReducer;