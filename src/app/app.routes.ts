import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { PlanesDeSuscripcionComponent } from './planes-de-suscripcion/planes-de-suscripcion.component';
import { WatchingMovieComponent } from './watching-movie/watching-movie.component';

export const routes = [
    {path: 'novedades', component: NovedadesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'watch', component: WatchingMovieComponent},
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'planes', component: PlanesDeSuscripcionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mi-cuenta', component: MiCuentaComponent},
    {path: 'movie', component: MovieDetailComponent},
];

