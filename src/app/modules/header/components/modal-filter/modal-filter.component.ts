import { Component, EventEmitter, Output } from '@angular/core';
import { allGenres } from '../../../../shared/constants/constants';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filterMovies } from 'src/app/store/actions/movie.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.scss'],
})
export class ModalFilterComponent {
  @Output() toggle = new EventEmitter<boolean>();

  public allGenres = allGenres;

  public filterForm = this.formBuilder.group({
    genre: [],
    yearFrom: [''],
    yearTo: [''],
    ratingFrom: [''],
    ratingTo: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  public toggleFilter(): void {
    this.toggle.emit();
  }

  public submitForm() {
    this.store.dispatch(
      filterMovies({ filterParams: this.filterForm.getRawValue() })
    );
    this.router.navigate(['found-movies']);
  }
}
