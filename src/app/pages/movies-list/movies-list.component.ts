import {Component, OnInit} from '@angular/core';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';
import {OmdbApiService} from '../../services/omdb-api.service';
import {Movie} from '../../shared/models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  searchStr: string;
  searchMovies: Movie[];

  constructor(private omdbApiService: OmdbApiService, private toastrService: NbToastrService) {
  }

  ngOnInit(): void {
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
          this.showToast('warning');
        }
      });
  }

  onSubmit(): void {
    this.getMovies();
  }

  showToast(status: NbComponentStatus): void {
    this.toastrService.show('Not a valid search word!', `Toast: Error`, {status});
  }

}
