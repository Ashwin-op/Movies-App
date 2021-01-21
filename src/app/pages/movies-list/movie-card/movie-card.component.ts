import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Movie} from '../../../shared/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Input() bookmarkedMovies: string[];
  @Input() showBookmark = true;

  @Output() bookmarkEvent: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getImage(): string {
    if (this.movie.Poster === 'N/A') {
      return 'https://picsum.photos/id/866/200/250';
    }
    return this.movie.Poster;
  }

  getIcon(): string {
    return this.bookmarkedMovies.includes(this.movie.imdbID) ? 'bookmark' : 'bookmark-outline';
  }

  onBookmark(): void {
    this.bookmarkEvent.emit();
  }
}
