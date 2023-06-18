import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, THIRD_API_HEADER } from 'src/app/data/constants';


@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    constructor(private http: HttpClient ){ }

    getMovies(): Observable<any>{
        return this.http.get(`${API_URL}v1.3/movie?page=1&limit=10`, {
            headers: THIRD_API_HEADER
        })
    }
}