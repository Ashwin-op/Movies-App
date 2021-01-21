import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbTagModule,
  NbThemeModule,
  NbToastrModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MoviesListComponent} from './pages/movies-list/movies-list.component';
import {MovieCardComponent} from './pages/movies-list/movie-card/movie-card.component';
import {BookmarkedMoviesComponent} from './pages/bookmarked-movies/bookmarked-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    BookmarkedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbInputModule,
    NbCardModule,
    NbTagModule,
    NbFormFieldModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
