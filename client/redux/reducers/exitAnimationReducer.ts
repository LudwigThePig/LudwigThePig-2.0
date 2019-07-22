import { ExitAnimationAction, ACTIVE_EXIT_ANIMATION } from '../types/exitAnimationTypes';


interface IntialLoadState {
  activeExitAnimation: boolean
}

const initialState: IntialLoadState = {
  activeExitAnimation: false
}

const exitAnimationReducer = (state = initialState, action: ExitAnimationAction) => {
  switch(action.type) {
    case ACTIVE_EXIT_ANIMATION: 
      return { activeInitialLoad: action.payload };
    default:
      return state;
  }
}

export default exitAnimationReducer