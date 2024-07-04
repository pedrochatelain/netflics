import { HomeComponent } from './home/home.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { WatchingMovieComponent } from './watching-movie/watching-movie.component';

export const routes = [
    {path: 'novedades', component: NovedadesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'watch', component: WatchingMovieComponent},
];

