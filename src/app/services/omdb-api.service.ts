import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private searchUrl: string;

  constructor(private http: HttpClient) {
  }

  searchMovies(term: string): Observable<any> {
    this.searchUrl = `http://www.omdbapi.com/?apikey=49a0d963&s=${encodeURI(term)}&r=json`;
    return this.http
      .get(this.searchUrl)
      .pipe(map((response: any) => response.Search));
  }

  searchMovie(id: string): Observable<any> {
    this.searchUrl = `http://www.omdbapi.com/?apikey=49a0d963&i=${encodeURI(id)}&r=json`;
    return this.http
      .get(this.searchUrl)
      .pipe(map((response: any) => response));
  }
}
