import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectFavMovies } from 'src/app/store/selectors/movies.selector';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  favMovies: any[];
  subscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(selectFavMovies)
      .subscribe((favMovies) => {
        this.favMovies = favMovies;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
