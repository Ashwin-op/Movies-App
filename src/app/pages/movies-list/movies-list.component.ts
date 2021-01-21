import {Component, OnInit} from '@angular/core';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';

import {OmdbApiService} from '../../services/omdb-api.service';
import {Movie} from '../../shared/models/movie.model';
import {getLocalStorage, setLocalStorage} from '../../shared/localStorage';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  searchStr: string;
  searchMovies: Movie[];
  bookmarkedMovies: string[];

  constructor(private omdbApiService: OmdbApiService, private toastrService: NbToastrService) {
  }

  ngOnInit(): void {
    this.bookmarkedMovies = getLocalStorage() || new Array<string>();
  }

  getMovies(): void {
    this.searchMovies = new Array<Movie>();
    this.omdbApiService.searchMovies(this.searchStr)
      .subscribe(res => {
        try {
          res.forEach(movie => {
            this.omdbApiService.searchMovie(movie.imdbID)
              .subscribe(result => this.searchMovies.push(result));
          });
        } catch (e) {
          this.showToast('warning', 'Not a valid search word!');
        }
      });
  }

  onSubmit(): void {
    this.getMovies();
  }

  showToast(status: NbComponentStatus, message: string): void {
    this.toastrService.show(message, `Information`, {status});
  }

  onBookmark(movie: Movie): void {
    if (this.bookmarkedMovies.includes(movie.imdbID)) {
      this.bookmarkedMovies.splice(this.bookmarkedMovies.indexOf(movie.imdbID), 1);
      this.showToast('danger', 'Bookmark deleted!');
    } else {
      this.bookmarkedMovies.push(movie.imdbID);
      this.showToast('success', 'Bookmark added!');
    }
    setLocalStorage(this.bookmarkedMovies);
  }
}
