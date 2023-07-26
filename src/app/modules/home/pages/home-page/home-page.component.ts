import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadMovies } from 'src/app/store/actions/movie.actions';
import { selectAllMovies } from 'src/app/store/selectors/movies.selector';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public page = 1;
  public movies$ = this.store.select(selectAllMovies);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadMovies({ page: this.page, firstLoad: true }));
  }

  public loadNewMovies() {
    this.page += 1;
    this.store.dispatch(loadMovies({ page: this.page, firstLoad: false }));
  }
}
