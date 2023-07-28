import { createAction, props } from '@ngrx/store';

export const loadMovies = createAction(
  '[Home Page] Load movies',
  props<{ page: number; size?: number; firstLoad: boolean }>()
);

export const loadMoviesSuccess = createAction(
  '[Home Page] Load movies Success',
  props<{ movies: { docs: any[] }; firstLoad?: boolean }>()
);
export const loadMoviesFailure = createAction(
  '[Home Page] Load movies Failure',
  props<{ error: string }>()
);

export const getTrendsMovies = createAction(
  '[Trends Page] Trends Movies',
  props<{ page: number; size?: number; firstLoad: boolean }>()
);

export const getTrendsMoviesSuccess = createAction(
  '[Trends Page] Get trends movies Success',
  props<{ trendsMovies: any; firstLoad?: boolean }>()
);
export const getTrendsMoviesFailure = createAction(
  '[Trends Page] Get trends movies Failure',
  props<{ error: string }>()
);

export const addToFavorites = createAction(
  '[Movie Content Page] Add to favorites',
  props<{ favMovie: any }>()
);

export const removeFromFavorites = createAction(
  '[Movie Content Page] Remove from favorites',
  props<{ id: number }>()
);

export const findMovies = createAction(
  '[Search bar] Find movies',
  props<{ searchValue: string }>()
);

export const findMoviesSuccess = createAction(
  '[Search bar] Find movies success',
  props<{ searchMovies: any[] }>()
);

export const findMoviesFailure = createAction(
  '[Search bar] Find movies failure',
  props<{ error: string }>()
);
