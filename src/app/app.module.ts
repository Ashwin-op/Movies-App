import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {NbInputModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MoviesListComponent} from './pages/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
