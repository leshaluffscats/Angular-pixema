import { createAction, props } from '@ngrx/store';
import { IFilterParams } from 'src/app/shared/interfaces/interfaces';

// Load
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

// Trends
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

// Favorites
export const addToFavorites = createAction(
  '[Movie Content Page] Add to favorites',
  props<{ favMovie: any }>()
);

export const removeFromFavorites = createAction(
  '[Movie Content Page] Remove from favorites',
  props<{ id: number }>()
);

// Find
export const findMovies = createAction(
  '[Search bar] Find movies',
  props<{ searchValue: string | null }>()
);

export const findMoviesSuccess = createAction(
  '[Search bar] Find movies success',
  props<{ foundMovies: any }>()
);

export const findMoviesFailure = createAction(
  '[Search bar] Find movies failure',
  props<{ error: string }>()
);

// Filter
export const filterMovies = createAction(
  '[Modal filter] Filter movies',
  props<{ filterParams: IFilterParams }>()
);

export const filterMoviesSuccess = createAction(
  '[Modal filter] Filter movies success',
  props<{ foundMovies: any }>()
);

export const filterMoviesFailure = createAction(
  '[Modal filter] Filter movies failure',
  props<{ error: string }>()
);
