import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movies: IMovie[];

  @Output() changedPage = new EventEmitter();

  public changePage() {
    this.changedPage.emit();
  }
}
