import {Component, OnInit} from '@angular/core';

import {getLocalStorage} from '../../shared/localStorage';
import {Movie} from '../../shared/models/movie.model';
import {OmdbApiService} from '../../services/omdb-api.service';

@Component({
  selector: 'app-bookmarked-movies',
  templateUrl: './bookmarked-movies.component.html',
  styleUrls: ['./bookmarked-movies.component.scss']
})
export class BookmarkedMoviesComponent implements OnInit {

  bookmarkedMovies: string[];
  movieDetails: Movie[];

  constructor(private omdbApiService: OmdbApiService) {
  }

  ngOnInit(): void {
    this.bookmarkedMovies = getLocalStorage() || new Array<string>();

    this.movieDetails = new Array<Movie>();
    this.bookmarkedMovies.forEach(id => {
      this.omdbApiService.searchMovie(id)
        .subscribe(result => this.movieDetails.push(result));
    });
  }
}
