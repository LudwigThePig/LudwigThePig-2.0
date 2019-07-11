import { NavAction, ACTIVE_NAV, navPayload } from '../types/navTypes';

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