import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movie.actions';

export interface IMovieInitialState {
  movies: any[];
  favMovies: any[];
  isLoading: boolean;
  error: null | string;
}

export const MovieInitialState: IMovieInitialState = {
  movies: [],
  favMovies: [],
  isLoading: false,
  error: null,
};

export const movieReducer = createReducer(
  MovieInitialState,

  // Load
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

  // Trends
  on(MoviesActions.getTrendsMovies, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(
    MoviesActions.getTrendsMoviesSuccess,
    (state, { firstLoad, trendsMovies }) => ({
      ...state,
      isLoading: false,
      movies: firstLoad
        ? [...trendsMovies.docs]
        : [...state.movies, ...trendsMovies.docs],
    })
  ),

  on(MoviesActions.getTrendsMoviesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),

  // Find
  on(MoviesActions.findMovies, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(MoviesActions.findMoviesSuccess, (state, { foundMovies }) => ({
    ...state,
    movies: [...foundMovies.docs],
    isLoading: false,
  })),

  on(MoviesActions.findMoviesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),

  //Favorites
  on(MoviesActions.addToFavorites, (state, { favMovie }) => ({
    ...state,
    favMovies: [...state.favMovies, favMovie],
  })),

  on(MoviesActions.removeFromFavorites, (state, { id }) => ({
    ...state,
    favMovies: state.favMovies.filter((favMovie) => favMovie.id !== id),
  })),

  // Filter
  on(MoviesActions.filterMovies, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(MoviesActions.filterMoviesSuccess, (state, { foundMovies }) => ({
    ...state,
    movies: [...foundMovies.docs],
    isLoading: false,
  })),

  on(MoviesActions.filterMoviesFailure, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
  }))
);
