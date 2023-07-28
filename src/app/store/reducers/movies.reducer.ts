import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movie.actions';

export interface IMovieInitialState {
  movies: any[];
  filteredMovies: any[];
  trendsMovies: any[];
  favMovies: any[];
  searchMovies: any[];
  isLoading: boolean;
  error: null | string;
}

export const MovieInitialState: IMovieInitialState = {
  movies: [],
  filteredMovies: [],
  trendsMovies: [],
  favMovies: [],
  searchMovies: [],
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
      trendsMovies: firstLoad
        ? [...trendsMovies.docs]
        : [...state.trendsMovies, ...trendsMovies.docs],
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
    isLoading: false,
  })),

  on(MoviesActions.findMoviesSuccess, (state, { searchMovies }) => ({
    ...state,
    searchMovies: searchMovies,
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
  }))
);
