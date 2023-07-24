import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/moviesService';
import { Store, select } from '@ngrx/store';
import { loadMovies } from 'src/app/store/actions/movie.actions';
import { selectAllMovies } from 'src/app/store/selectors/movies.selector';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public page: number;

  public movies$ = this.store.select(selectAllMovies);

  constructor(private MoviesService: MoviesService, private store: Store) {}

  ngOnInit(): void {
    this.MoviesService.getMovies((this.page = 1), 12).subscribe(({ docs }) => {
      this.store.dispatch(loadMovies({ movies: docs }));
    });
  }

  loadNewMovies() {
    this.page += 1;

    this.MoviesService.getMovies(this.page, 12).subscribe(({ docs }) => {
      this.store.dispatch(loadMovies({ movies: docs }));
    });
  }
}
