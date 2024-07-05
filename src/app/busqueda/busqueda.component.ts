import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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

  color = "red";
  selected = 'option2';
  checked = false;

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
      this.filtro_mostrar_peliculas.nativeElement.querySelector('mat-icon').classList.toggle('display-none')
    })
    // listen filtro_mostrar_series
    this.filtro_mostrar_series.nativeElement.addEventListener('click', () => {
      this.filtro_mostrar_series.nativeElement.classList.toggle('border-blue');
      this.filtro_mostrar_series.nativeElement.querySelector('mat-icon').classList.toggle('display-none')
    })
  }
}
