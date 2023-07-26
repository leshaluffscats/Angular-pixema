import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movie.actions';

export interface IMovieInitialState {
  movies: any[];
  filteredMovies: any[];
  trendsMovies: any[];
  isLoading: boolean;
  error: null | string;
}

export const MovieInitialState: IMovieInitialState = {
  movies: [],
  filteredMovies: [],
  trendsMovies: [],
  isLoading: false,
  error: null,
};

export const movieReducer = createReducer(
  MovieInitialState,
  on(MoviesActions.loadMovies, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(MoviesActions.loadMoviesSuccess, (state, { firstLoad, movies }) => ({
    ...state,
    isLoading: false,
    movies: firstLoad ? [...movies.docs] : [...state.movies, ...movies.docs],
  })),
  on(MoviesActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(MoviesActions.getTrendsMovies, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(MoviesActions.getTrendsMoviesSuccess, (state, { firstLoad, movies }) => ({
    ...state,
    isLoading: false,
    trendsMovies: firstLoad
      ? [...movies.docs]
      : [...state.movies, ...movies.docs],
  })),
  on(MoviesActions.getTrendsMoviesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);
