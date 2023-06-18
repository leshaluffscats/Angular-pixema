import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { LoginBtnComponent } from './components/buttons/login-btn/login-btn.component';
import { ShowMoreBtnComponent } from './components/buttons/show-more-btn/show-more-btn.component';
import { AddToFavBtnComponent } from './components/buttons/add-to-fav-btn/add-to-fav-btn.component';
import { AsideComponent } from './components/aside/aside.component';
import { AsideBtnComponent } from './components/buttons/aside-btn/aside-btn.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    LoginBtnComponent,
    ShowMoreBtnComponent,
    AddToFavBtnComponent,
    AsideComponent,
    AsideBtnComponent,
    MovieItemComponent,
    MovieListComponent, 
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
