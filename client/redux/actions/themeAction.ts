import { IThemeAction, themePayload, ACTIVE_THEME } from '../types/themeTypes'

export function updateNav(newMessage: themePayload): IThemeAction {
  return {
    type: ACTIVE_THEME,
    payload: newMessage
  }
}