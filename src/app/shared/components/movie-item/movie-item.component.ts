import { Component, Input } from '@angular/core';
import { IMovieGenres } from '../../interfaces/interfaces';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() image: string;
  @Input() movieName: string;
  @Input() movieGenres: IMovieGenres[];
  @Input() movieId: number;

  public cutGenresArr(): IMovieGenres[] {
    return this.movieGenres?.slice(0, 3);
  }
}
