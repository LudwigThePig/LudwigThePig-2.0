import { ProjectAction, ACTIVE_PROJECT, projectPayload } from '../types/projectTypes'

interface ProjectState {
  projects: projectPayload;
}

const initialState:ProjectState = {
  projects: []
}

const projectReducer = (state = initialState, action:ProjectAction):ProjectState => {
  switch(action.type) {
    case ACTIVE_PROJECT:
      return { projects: action.payload };
    default:
      return state;
  }
}

export default projectReducer;