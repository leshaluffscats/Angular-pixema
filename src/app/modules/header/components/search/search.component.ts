import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { findMovies } from 'src/app/store/actions/movie.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchQuery = new FormControl('');
  public open = false;

  handleSearch(): void {
    this.store.dispatch(findMovies({ searchValue: this.searchQuery.value }));
    this.router.navigate(['found-movies']);
  }

  toggleFilter() {
    this.open = !this.open;

    if (this.open) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }

  constructor(private store: Store<AppState>, private router: Router) {}
}
