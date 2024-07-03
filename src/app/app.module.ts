import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NovedadesComponent } from './novedades/novedades.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NovedadesComponent,
    HomeComponent
  ],
  imports: [
    MatBadgeModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
