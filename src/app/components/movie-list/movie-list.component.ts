import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/moviesService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.MoviesService.getMovies().subscribe(({docs}) => {
      this.movies = docs;
    })
  }

}
