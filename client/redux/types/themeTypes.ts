export const ACTIVE_THEME = 'ACTIVE_THEME';

export type themePayload = 'dark' | 'light' | 'blue';

export interface IThemeAction {
  type: typeof ACTIVE_THEME
  payload: themePayload
}
