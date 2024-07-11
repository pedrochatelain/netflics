import { Component } from '@angular/core';

@Component({
  selector: 'app-planes-de-suscripcion',
  templateUrl: './planes-de-suscripcion.component.html',
  styleUrls: ['./planes-de-suscripcion.component.css']
})
export class PlanesDeSuscripcionComponent {

  selected: boolean = false;

  ngAfterViewInit() {
    this.selected = true;
  }

}
