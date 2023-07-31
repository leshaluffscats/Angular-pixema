import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  API_URL,
  THIRD_API_HEADER,
  API_HEADER,
  SECOND_API_HEADER,
} from '../shared/constants/constants';
import { IFilterParams } from '../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(page: number, limit: number): Observable<any> {
    return this.http.get(`${API_URL}v1.3/movie?page=${page}&limit=${limit}`, {
      // headers: THIRD_API_HEADER,
      // headers: SECOND_API_HEADER,
      headers: API_HEADER,
    });
  }
  getMovieById(id: string | null): Observable<any> {
    return this.http.get(`${API_URL}v1.3/movie/${id}`, {
      // headers: THIRD_API_HEADER,
      // headers: SECOND_API_HEADER,

      headers: API_HEADER,
    });
  }

  searchForAMovie(searchValue: string | null): Observable<any> {
    return this.http.get(
      `${API_URL}v1.2/movie/search?page=1&limit=10&query=${searchValue}`,
      {
        // headers: THIRD_API_HEADER,
        // headers: SECOND_API_HEADER,
        headers: API_HEADER,
      }
    );
  }

  getTrendsMovies(page: string | number, limit: string | number) {
    return this.http.get(
      `${API_URL}v1.3/movie?page=${page}&limit=${limit}&year=${new Date().getFullYear()}`,
      {
        // headers: THIRD_API_HEADER,
        // headers: SECOND_API_HEADER,
        headers: API_HEADER,
      }
    );
  }

  getFilteredMovies(filterParams: IFilterParams) {
    return this.http.get(
      `${API_URL}v1.3/movie?sortField=sortType=-1&year=${
        filterParams.yearFrom
      }-${filterParams.yearTo}${
        filterParams.genre === 'Сбросить фильтр'
          ? ''
          : `&genres.name=${filterParams.genre?.toLowerCase()}`
      }&rating.kp=${filterParams.ratingFrom}-${filterParams.ratingTo}&limit=12`,
      {
        // headers: THIRD_API_HEADER,
        // headers: SECOND_API_HEADER,
        headers: API_HEADER,
      }
    );
  }
}
