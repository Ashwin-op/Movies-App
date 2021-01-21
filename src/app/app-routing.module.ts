import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from './pages/movies-list/movies-list.component';
import {BookmarkedMoviesComponent} from './pages/bookmarked-movies/bookmarked-movies.component';

const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: 'bookmarks', component: BookmarkedMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
