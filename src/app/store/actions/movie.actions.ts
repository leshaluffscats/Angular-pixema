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
  props<{ movies: any; firstLoad?: boolean }>()
);
export const getTrendsMoviesFailure = createAction(
  '[Trends Page] Get trends movies Failure',
  props<{ error: string }>()
);
