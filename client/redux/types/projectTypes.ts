export const ACTIVE_PROJECT = 'ACTIVE_PROJECT';

import { project } from '../../types';

export type projectPayload = Array<project>;

export interface ProjectAction {
  type: typeof ACTIVE_PROJECT
  payload: projectPayload
}