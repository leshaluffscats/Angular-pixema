import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss'],
})
export class SimilarMoviesComponent {
  @Input() similarMovies: any[];
}
