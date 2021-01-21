import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../../shared/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  isBookmarked: boolean;

  @Input() movie: Movie;
  @Input() bookmarkedMovieIds: string[];

  @Output() bookmarkEvent: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getImage(): string {
    if (this.movie.Poster === 'N/A') {
      return 'https://picsum.photos/200/250';
    }
    return this.movie.Poster;
  }

  onBookmark(): void {
    this.bookmarkEvent.emit();
  }
}
