import { string } from "prop-types";

export type activeNav = 'home' | 'about' | 'projects';

export interface State {
  activeNav: activeNav;
}