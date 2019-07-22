import { ACTIVE_EXIT_ANIMATION } from "../types/exitAnimationTypes";

export function updateExitAnimation(newInitialState: boolean) {
  return {
    type: ACTIVE_EXIT_ANIMATION,
    payload: newInitialState
  }
}