import { ACTIVE_PROJECT, ProjectAction, projectPayload } from '../types/projectTypes';

export function updateProjects(newMessage: projectPayload): ProjectAction {
  return {
    type: ACTIVE_PROJECT,
    payload: newMessage
  }
}