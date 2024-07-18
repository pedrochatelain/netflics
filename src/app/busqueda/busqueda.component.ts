import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FiltroDuracionComponent } from '../filtro-duracion/filtro-duracion.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @Input()
  my_placeholder = "Escribe una serie o película";

  @ViewChild("buscador")
  buscador!: ElementRef;

  @ViewChild("filtro_mostrar_peliculas")
  filtro_mostrar_peliculas!: ElementRef;

  @ViewChild("filtro_mostrar_series")
  filtro_mostrar_series!: ElementRef;

  @ViewChild("icon_check")
  icon_check!: ElementRef;
  
  @ViewChild("btn_activar_filtros")
  btn_activar_filtros!: ElementRef;
  
  @ViewChild("filtro_duracion")
  filtro_duracion!: FiltroDuracionComponent;

  color = "red";
  selected = 'option2';
  checked = false;
  is_active_btn_activar_filtros = false;

  ngAfterViewInit() {
    this.buscador.nativeElement.focus();
    // listen focus
    this.buscador.nativeElement
    .addEventListener('focus', () => this.my_placeholder = "Escribe una serie o película");
    ;
    // listen not focused
    this.buscador.nativeElement
    .addEventListener('blur', () => this.my_placeholder = "Click aquí para buscar");
    ;
    // listen filtro_mostrar_peliculas
    this.filtro_mostrar_peliculas.nativeElement.addEventListener('click', () => {
      this.filtro_mostrar_peliculas.nativeElement.classList.toggle('border-blue');
      this.filtro_mostrar_peliculas.nativeElement.querySelector('mat-icon').classList.toggle('visibility-hidden')
    })
    // listen filtro_mostrar_series
    this.filtro_mostrar_series.nativeElement.addEventListener('click', () => {
      this.filtro_mostrar_series.nativeElement.classList.toggle('border-blue');
      this.filtro_mostrar_series.nativeElement.querySelector('mat-icon').classList.toggle('visibility-hidden')
    })
    // listen btn_activar_filtros
    this.btn_activar_filtros.nativeElement.addEventListener('click', () => {
      this.is_active_btn_activar_filtros = ! this.is_active_btn_activar_filtros
      this.filtro_mostrar_peliculas.nativeElement.classList.toggle('display-none');
      this.filtro_mostrar_series.nativeElement.classList.toggle('display-none');
      this.filtro_duracion.show_or_hide()
      if (this.is_active_btn_activar_filtros) {
        this.btn_activar_filtros.nativeElement.querySelector('p').innerHTML = "Ocultar filtros de búsqueda"
      } else {
        this.btn_activar_filtros.nativeElement.querySelector('p').innerHTML = "Filtros de búsqueda"
      }
    })
  }
}
