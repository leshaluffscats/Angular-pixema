import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movies: any;

  @Output() changedPage = new EventEmitter();

  public changePage() {
    this.changedPage.emit();
  }
}
