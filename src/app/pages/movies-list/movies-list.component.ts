import {Component, OnInit} from '@angular/core';
import {OmdbApiService} from '../../services/omdb-api.service';
import {Movie} from '../../shared/models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  searchStr = 'Sample';
  searchMovies: Movie[];

  constructor(private omdbApiService: OmdbApiService) {
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.omdbApiService.searchMovies(this.searchStr)
      .subscribe(res => {
        // @ts-ignore
        this.searchMovies = res;
        console.log(res);
      });
  }

}
