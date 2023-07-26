import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/moviesService';
import * as MoviesActions from '../actions/movie.actions';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      mergeMap(({ page, size = 12, firstLoad }) =>
        this.moviesService.getMovies(page, size).pipe(
          map((movies) =>
            MoviesActions.loadMoviesSuccess({ movies, firstLoad })
          ),
          catchError((error) =>
            of(MoviesActions.loadMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadTrendsMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.getTrendsMovies),
      mergeMap(({ page, size = 12, firstLoad }) =>
        this.moviesService.getTrendsMovies(page, size).pipe(
          map((movies) =>
            MoviesActions.getTrendsMoviesSuccess({ movies, firstLoad })
          ),
          tap(console.log),
          catchError((error) =>
            of(MoviesActions.getTrendsMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
