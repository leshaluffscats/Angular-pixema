import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movie.actions';

export interface IMovieInitialState {
  movies: any[];
  filteredMovies: any[];
  trendsMovies: any[];
}

export const MovieInitialState: IMovieInitialState = {
  movies: [],
  filteredMovies: [],
  trendsMovies: [],
};

export const movieReducer = createReducer(
  MovieInitialState,
  on(MoviesActions.loadMovies, (state, { movies, load }) => ({
    ...state,
    movies: load ? [...state.movies, ...movies] : [...movies],
  }))
);
