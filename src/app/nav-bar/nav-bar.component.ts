import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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

  @Input()
  is_selected_planes: boolean = false;

  @Input()
  is_selected_login: boolean = false;

  @Input()
  is_selected_home: boolean = false;

  @Input()
  is_selected_buscar: boolean = false;

  @Input()
  is_selected_notificaciones: boolean = false;

  @Input()
  is_selected_mi_cuenta: boolean = false;

  @ViewChild("btn_planes")
  btn_planes!: ElementRef;

  @ViewChild("btn_login")
  btn_login!: ElementRef;

  @ViewChild("btn_home")
  btn_home!: ElementRef;

  @ViewChild("btn_buscar")
  btn_buscar!: ElementRef;

  @ViewChild("btn_notificaciones")
  btn_notificaciones!: ElementRef;

  @ViewChild("btn_mi_cuenta")
  btn_mi_cuenta!: ElementRef;

  ngAfterViewInit() {
    if (this.is_selected_planes) {
      this.btn_planes.nativeElement.classList.add("selected")
    }
    if (this.is_selected_login) {
      this.btn_login.nativeElement.classList.add("selected")
    }
    if (this.is_selected_home) {
      this.btn_home.nativeElement.classList.add("selected")
    }
    if (this.is_selected_buscar) {
      this.btn_buscar.nativeElement.classList.add("selected")
    }
    if (this.is_selected_notificaciones) {
      this.btn_notificaciones.nativeElement.classList.add("selected")
    }
    if (this.is_selected_mi_cuenta) {
      this.btn_mi_cuenta.nativeElement.classList.add("selected")
    }
  }

}