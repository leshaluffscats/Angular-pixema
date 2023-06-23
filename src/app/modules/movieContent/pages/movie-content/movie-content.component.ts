import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/moviesService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.scss'],
})
export class MovieContentPageComponent implements OnInit {
  movieId: any;
  movie: any;

  constructor(
    private moviesService: MoviesService,
    // private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => { this.movieId = params.get('id'); });

    this.moviesService.getMovieById(this.movieId).subscribe((res) => {
      this.movie = res;
    });
  }
}
