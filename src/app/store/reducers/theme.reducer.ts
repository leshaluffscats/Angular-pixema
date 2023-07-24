import { createReducer, on } from '@ngrx/store';
import { toggleTheme } from '../actions/theme.action';

export interface IThemeInitialState {
  isDark: boolean;
}

export const ThemeInitialState: IThemeInitialState = {
  isDark: true,
};

export const themeReducer = createReducer(
  ThemeInitialState,
  on(toggleTheme, (state) => ({ ...state, isDark: !state.isDark }))
);
