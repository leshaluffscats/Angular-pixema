import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-table-data',
  templateUrl: './movie-table-data.component.html',
  styleUrls: ['./movie-table-data.component.scss']
})
export class MovieTableDataComponent {
  @Input() movieData: any;

  showDate(){
    return new Date(this.movieData.premiere.world).toLocaleDateString();
  }

  filterPersons(str: string){
    return this.movieData.persons.filter((el: any)=> el.enProfession === str)
  }
}
