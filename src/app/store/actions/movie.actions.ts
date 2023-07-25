import { createAction, props } from '@ngrx/store';

export const loadMovies = createAction(
  '[Home Page] Load movies',

  props<{ movies: any[]; load?: boolean }>()
);
export const filterMovies = createAction('[Filter page] Filter movies');
export const getTrendsMovies = createAction('[Trends Page] Trends Movies');

// export const loadMoviesSuccess = createAction(
//   '[Movie Api] Movie Load Success',
//   props<{ movies: any[] }>()
// );

// export const loadMoviesFailure = createAction(
//   '[Movie Api] Movie Load Success',
//   props<{ error: string }>()
// );
