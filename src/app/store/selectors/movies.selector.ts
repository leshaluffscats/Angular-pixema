import { createSelector } from '@ngrx/store';
import { IMovieInitialState } from '../reducers/movies.reducer';
import { AppState } from '..';

export const selectMovies = (state: AppState) => state.movies;

export const selectAllMovies = createSelector(
  selectMovies,
  (state: IMovieInitialState) => state.movies
);

export const isLoadingSelector = createSelector(
  selectMovies,
  (state: IMovieInitialState) => state.isLoading
);

export const MovieErrorSelector = createSelector(
  selectMovies,
  (state: IMovieInitialState) => state.error
);


export const selectFavMovies = createSelector(
  selectMovies,
  (state: IMovieInitialState) => state.favMovies
);


