import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';
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
          map((trendsMovies) =>
            MoviesActions.getTrendsMoviesSuccess({ trendsMovies, firstLoad })
          ),
          catchError((error) =>
            of(MoviesActions.getTrendsMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  findMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.findMovies),
      mergeMap(({ searchValue }) =>
        this.moviesService.searchForAMovie(searchValue).pipe(
          map((foundMovies) =>
            MoviesActions.findMoviesSuccess({ foundMovies })
          ),
          catchError((error) =>
            of(MoviesActions.findMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  filterMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.filterMovies),
      mergeMap(({ filterParams }) =>
        this.moviesService.getFilteredMovies(filterParams).pipe(
          map((foundMovies) =>
            MoviesActions.filterMoviesSuccess({ foundMovies })
          ),
          catchError((error) =>
            of(MoviesActions.filterMoviesFailure({ error: error.message }))
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
