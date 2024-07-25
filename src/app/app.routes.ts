import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { PlanesDeSuscripcionComponent } from './planes-de-suscripcion/planes-de-suscripcion.component';
import { SectionFaqComponent } from './section-faq/section-faq.component';
import { WatchingMovieComponent } from './watching-movie/watching-movie.component';

export const routes = [
    {path: '', component: LoginComponent},
    {path: 'novedades', component: NovedadesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'watch', component: WatchingMovieComponent},
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'planes', component: PlanesDeSuscripcionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mi-cuenta', component: MiCuentaComponent},
    {path: 'movie', component: MovieDetailComponent},
    {path: 'series/the_acolyte', component: MovieDetailComponent, data:{
        is_serie: true,
        src_image: 'assets/the_acolyte_movie_detail.jpg',
        mobile_src_image: 'assets/the_acolyte_mobile.jpg',
        title: 'The Acolyte',
        description: 'A former Padawan reunites with her Jedi Master to investigate a series of crimes but discovers the forces they confront are more sinister than they ever anticipated',
        src_image_episode_1: 'assets/the_acolyte_episode_1.webp',
        src_image_episode_2: 'assets/the_acolyte_episode_2.webp'
    }},
    {path: 'series/the_bear', component: MovieDetailComponent, data:{
        is_serie: true,
        src_image: 'assets/the_bear.jpg',
        mobile_src_image: 'assets/flat,750x1000,075,t.jpg',
        title: 'The Bear',
        description: 'A former Padawan reunites with her Jedi Master to investigate a series of crimes but discovers the forces they confront are more sinister than they ever anticipated',
        src_image_episode_1: 'assets/the_acolyte_episode_1.webp',
        src_image_episode_2: 'assets/the_acolyte_episode_2.webp'
    }},
    {path: 'movies/deadpool_and_wolverine', component: MovieDetailComponent, data:{
        is_serie: false,
        src_image: 'assets/deadpoolandwolverine.webp',
        mobile_src_image: 'assets/mobile_deadpool_and_wolverine.jpg',
        title: 'Deadpool & Wolverine',
        description: 'Six years after the events of Deadpool 2 (2018),[2] Wade Wilson lives a quiet life, having left his time as the mercenary Deadpool behind him, until the Time Variance Authority (TVA)—a bureaucratic organization that exists outside of time and space and monitors the timeline—pulls him into a new mission.'
    }},
    {path: 'faq', component: SectionFaqComponent},
];

