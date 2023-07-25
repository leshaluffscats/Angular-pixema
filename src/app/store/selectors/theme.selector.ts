import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { IThemeInitialState } from '../reducers/theme.reducer';

export const selectThemeState = (state: AppState) => state.theme;

export const selectTheme = createSelector(
  selectThemeState,
  (state: IThemeInitialState) => state.isDark
);
