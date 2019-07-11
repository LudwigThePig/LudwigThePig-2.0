export const ACTIVE_INITIAL_LOAD = 'ACTIVE_INITIAL_LOAD';

export interface InitalLoadAction {
  type: typeof ACTIVE_INITIAL_LOAD,
  payload: boolean
}
