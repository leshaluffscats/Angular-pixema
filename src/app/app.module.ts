import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './modules/header/header.component';
import { LogoComponent } from './modules/header/components/logo/logo.component';
import { SearchComponent } from './modules/header/components/search/search.component';
import { LoginBtnComponent } from './modules/header/components/login-btn/login-btn.component';
import { AsideComponent } from './shared/components/aside/aside.component';
import { MovieItemComponent } from './shared/components/movie-item/movie-item.component';
import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { SettingsComponent } from './modules/settings/components/settings.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { SettingsPageComponent } from './modules/settings/pages/settings-page/settings-page.component';
import { TrendsPageComponent } from './modules/trends/pages/trends-page/trends-page.component';
import { FavoritesPageComponent } from './modules/favorites/pages/favorites-page/favorites-page.component';
import { MovieContentPageComponent } from './modules/movieContent/pages/movie-content/movie-content.component';
import { MovieTableDataComponent } from './modules/movieContent/components/movie-table-data/movie-table-data.component';
import { ThemeBtnComponent } from './shared/components/theme-btn/theme-btn.component';
import { SignInFormComponent } from './modules/signIn/components/sign-in-form/sign-in-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    LoginBtnComponent,
    AsideComponent,
    MovieItemComponent,
    MovieListComponent,
    SettingsComponent,
    HomePageComponent,
    SettingsPageComponent,
    TrendsPageComponent,
    FavoritesPageComponent,
    MovieContentPageComponent,
    MovieTableDataComponent,
    ThemeBtnComponent,
    SignInFormComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
