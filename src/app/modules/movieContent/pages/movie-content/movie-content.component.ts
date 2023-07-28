import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/moviesService';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import {
  addToFavorites,
  removeFromFavorites,
} from 'src/app/store/actions/movie.actions';
import { selectFavMovies } from 'src/app/store/selectors/movies.selector';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.scss'],
})
export class MovieContentPageComponent implements OnInit, OnDestroy {
  public movie: any;
  public isFavorite: boolean;

  private storeSubscription: Subscription;
  private favMovies: any[];

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.moviesService.getMovieById(params.get('id'))
        )
      )
      .subscribe((res) => {
        this.movie = res;
        if (this.favMovies.find((favMovie) => favMovie.id === this.movie.id)) {
          this.isFavorite = true;
          // this.movie.isFavorite = true;
        } else {
          this.isFavorite = false;
          // this.movie.isFavorite = false;
        }
      });

    this.checkFavorites();
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

  public movieData() {
    return {
      countries: this.movie?.countries,
      persons: this.movie?.persons,
      year: this.movie?.year,
      premiere: this.movie?.premiere,
      similarMovies: this.movie?.similarMovies,
    };
  }

  public toggleFavorites(): void {
    if (this.isFavorite) {
      this.isFavorite = false;
      this.store.dispatch(removeFromFavorites({ id: this.movie.id }));
    } else {
      this.isFavorite = true;
      this.store.dispatch(addToFavorites({ favMovie: this.movie }));
    }
  }

  public checkFavorites(): void {
    this.storeSubscription = this.store
      .select(selectFavMovies)
      .subscribe((favMovies) => {
        this.favMovies = favMovies;
      });
  }
}
