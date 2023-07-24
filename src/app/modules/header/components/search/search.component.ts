import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesService } from 'src/app/services/moviesService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  searchQuery = new FormControl('');

  handleSearch(){
    this.moviesService.searchForAMovie(this.searchQuery.value).subscribe();
  }

  constructor(private moviesService: MoviesService){}
}
