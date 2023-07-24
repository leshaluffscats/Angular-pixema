import { createAction, props } from '@ngrx/store';

export const loadMovies = createAction(
  '[Home Page] Load movies',
  props<{ movies: any[] }>()
);
export const filterMovies = createAction('[]');
export const getTrendsMovies = createAction('[]');

// export const loadMoviesSuccess = createAction(
//   '[Movie Api] Movie Load Success',
//   props<{ movies: any[] }>()
// );

// export const loadMoviesFailure = createAction(
//   '[Movie Api] Movie Load Success',
//   props<{ error: string }>()
// );
