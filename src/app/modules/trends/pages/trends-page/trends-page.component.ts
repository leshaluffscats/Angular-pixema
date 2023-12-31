import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAllMovies } from 'src/app/store/selectors/movies.selector';
import { getTrendsMovies } from 'src/app/store/actions/movie.actions';
import { IMovie } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.scss'],
})
export class TrendsPageComponent implements OnInit {
  trendsMovies: IMovie[];
  public trendsMovies$ = this.store.select(selectAllMovies).subscribe(movies => this.trendsMovies = movies);
  public page = 1;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getTrendsMovies({ page: this.page, firstLoad: true }));
  }

  public loadNewTrends() {
    this.page++;
    this.store.dispatch(getTrendsMovies({ page: this.page, firstLoad: false }));
  }
}
