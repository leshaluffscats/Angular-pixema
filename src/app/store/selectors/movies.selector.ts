import { createSelector } from '@ngrx/store';
import { IMovieInitialState } from '../reducers/movies.reducer';
import { AppState } from '..';

export const selectMovies = (state: any) => state.movies;

export const selectAllMovies = createSelector(
  selectMovies,
  (state: IMovieInitialState) => state.movies
);
