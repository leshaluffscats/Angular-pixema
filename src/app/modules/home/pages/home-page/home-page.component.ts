import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadMovies } from 'src/app/store/actions/movie.actions';
import { MoviesService } from 'src/app/services/moviesService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

// Todo завтра сделать
export class HomePageComponent implements OnInit {
  // public page: number;

  // constructor(private MoviesService: MoviesService, private store: Store) {}

  ngOnInit(): void {
    // this.MoviesService.getMovies((this.page = 1), 12).subscribe(({ docs }) => {
    //   this.store.dispatch(loadMovies({ movies: docs }));
    // });
  }
}
