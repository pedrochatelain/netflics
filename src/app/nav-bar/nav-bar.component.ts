import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Input()
  show_inicio: boolean = true;

  @Input()
  show_buscar: boolean = true;

  @Input()
  show_notificaciones: boolean = true;

  @Input()
  show_mi_cuenta: boolean = true;

  @Input()
  show_login: boolean = false;

  @Input()
  show_planes: boolean = false;

  // ngAfterViewInit() {

  // }

}