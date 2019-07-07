import { NavAction, navPayload, ACTIVE_NAV } from '../types/navTypes'

export function updateNav(newMessage: navPayload): NavAction {
  return {
    type: ACTIVE_NAV,
    payload: newMessage
  }
}