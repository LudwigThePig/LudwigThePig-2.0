export const ACTIVE_NAV = 'ACTIVE_NAV'

export type navPayload = 'home' | 'about' | 'projects';

export interface NavAction {
  type: typeof ACTIVE_NAV
  payload: navPayload

}