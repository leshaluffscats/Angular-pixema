import { createSelector } from '@ngrx/store';
import { IMovieInitialState } from '../reducers/movies.reducer';
import { AppState } from '..';
import { IThemeInitialState } from '../reducers/theme.reducer';

export const selectMovies = (state: any) => state.theme;

export const selectAllMovies = createSelector(
  selectMovies,
  (state: IThemeInitialState) => state.isDark
);
