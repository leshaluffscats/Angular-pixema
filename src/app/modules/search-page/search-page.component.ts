import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAllMovies } from 'src/app/store/selectors/movies.selector';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public foundMovies: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectAllMovies)
      .subscribe((foundMovies) => (this.foundMovies = foundMovies));
  }
}
