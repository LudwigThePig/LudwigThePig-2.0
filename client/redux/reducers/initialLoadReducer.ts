import { InitalLoadAction, ACTIVE_INITIAL_LOAD } from '../types/initialLoadTypes';


interface IntialLoadState {
  activeInitialLoad: boolean
}

const initialState: IntialLoadState = {
  activeInitialLoad: true
}

const initialLoadReducer = (state = initialState, action: InitalLoadAction) => {
  switch(action.type) {
    case ACTIVE_INITIAL_LOAD: 
      return { activeInitialLoad: action.payload };
    default:
      return state;
  }
}

export default initialLoadReducer