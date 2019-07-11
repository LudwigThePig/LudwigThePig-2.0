import { InitalLoadAction, ACTIVE_INITIAL_LOAD } from "../types/initialLoadTypes";

export function updateInitialLoad(newInitialState: boolean) {
  return {
    type: ACTIVE_INITIAL_LOAD,
    payload: newInitialState
  }
}