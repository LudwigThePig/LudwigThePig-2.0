export const ACTIVE_EXIT_ANIMATION = 'ACTIVE_EXIT_ANIMATION';

export interface ExitAnimationAction {
  type: typeof ACTIVE_EXIT_ANIMATION,
  payload: boolean
}
