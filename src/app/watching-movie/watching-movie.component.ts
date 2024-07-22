import { Component, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-watching-movie',
  templateUrl: './watching-movie.component.html',
  styleUrls: ['./watching-movie.component.css']
})
export class WatchingMovieComponent {

  @Input()
  is_trailer : boolean = false;

  constructor(private _location: Location) {}

  backClicked() {
    this._location.back();
  }

}
