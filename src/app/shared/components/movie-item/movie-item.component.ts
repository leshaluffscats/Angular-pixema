import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})

export class MovieItemComponent {
  @Input() image: string;
  @Input() movieName: string;
  @Input() movieGenres: any[];
  @Input() movieId: string;

  cutGenresArr(){
    return this.movieGenres.slice(0,3);
  }
}
