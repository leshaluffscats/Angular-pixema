import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from './modules/settings/pages/settings-page/settings-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { TrendsPageComponent } from './modules/trends/pages/trends-page/trends-page.component';
import { FavoritesPageComponent } from './modules/favorites/pages/favorites-page/favorites-page.component';
import { MovieContentPageComponent } from './modules/movieContent/pages/movie-content/movie-content.component';
import { SignInPageComponent } from './modules/signIn/pages/sign-in-page/sign-in-page.component';
import { SearchPageComponent } from './modules/search-page/search-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'trends', component: TrendsPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'found-movies', component: SearchPageComponent },
  { path: 'movie/:id', component: MovieContentPageComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
