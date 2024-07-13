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
import { MoviePremiereComponent } from './movie-premiere/movie-premiere.component';
import { WatchingMovieComponent } from './watching-movie/watching-movie.component';
import { MatIconModule } from '@angular/material/icon';
import { BusquedaComponent } from './busqueda/busqueda.component'
import { FiltroDuracionComponent } from './filtro-duracion/filtro-duracion.component';
import { ContinuarViendoComponent } from './continuar-viendo/continuar-viendo.component';
import { MovieContinuarViendoComponent } from './movie-continuar-viendo/movie-continuar-viendo.component';
import { PlanesDeSuscripcionComponent } from './planes-de-suscripcion/planes-de-suscripcion.component';
import { PlanSuscripcionComponent } from './plan-suscripcion/plan-suscripcion.component';
import { LoginComponent } from './login/login.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentarioComponent } from './comentarios/comentario/comentario.component';
import { AgregarComentarioComponent } from './agregar-comentario/agregar-comentario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NovedadesComponent,
    HomeComponent,
    MoviePremiereComponent,
    WatchingMovieComponent,
    BusquedaComponent,
    FiltroDuracionComponent,
    ContinuarViendoComponent,
    MovieContinuarViendoComponent,
    PlanesDeSuscripcionComponent,
    PlanSuscripcionComponent,
    LoginComponent,
    MiCuentaComponent,
    MovieDetailComponent,
    ComentariosComponent,
    ComentarioComponent,
    AgregarComentarioComponent,
  ],
  imports: [
    MatBadgeModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
