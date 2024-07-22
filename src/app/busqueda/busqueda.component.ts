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
  
  @ViewChild("filtro_quitar_filtros")
  filtro_quitar_filtros!: ElementRef;

  @ViewChild("icon_check")
  icon_check!: ElementRef;
  
  @ViewChild("btn_activar_filtros")
  btn_activar_filtros!: ElementRef;
  
  @ViewChild("filtro_duracion")
  filtro_duracion!: FiltroDuracionComponent;
  
  @ViewChild("container_hint_resultados")
  container_hint_resultados!: ElementRef;
  
  @ViewChild("resultados")
  resultados!: ElementRef;
  
  @ViewChild("movie1")
  movie1!: ElementRef;

  @ViewChild("movie2")
  movie2!: ElementRef;

  @ViewChild("serie")
  serie!: ElementRef;

  color = "red";
  selected = 'option2';
  checked = false;
  is_active_btn_activar_filtros = false;
  timeout_search: string | number | NodeJS.Timeout | undefined;

  ngAfterViewInit() {
    this.buscador.nativeElement.focus();
    // listen input buscador focus
    this.buscador.nativeElement
    .addEventListener('focus', () => this.my_placeholder = "Escribe una serie o película");
    ;
    // listen input buscador not focused
    this.buscador.nativeElement
    .addEventListener('blur', () => this.my_placeholder = "Click aquí para buscar");
    ;
    // listen btn_activar_filtros
    this.btn_activar_filtros.nativeElement.addEventListener('click', () => {
      this.is_active_btn_activar_filtros = ! this.is_active_btn_activar_filtros
      this.filtro_mostrar_peliculas.nativeElement.classList.toggle('display-none');
      this.filtro_mostrar_series.nativeElement.classList.toggle('display-none');
      this.filtro_quitar_filtros.nativeElement.classList.toggle('display-none')
      this.filtro_duracion.show_or_hide()
    })
    // listen filtro_mostrar_peliculas
    this.filtro_mostrar_peliculas.nativeElement.addEventListener('click', () => {
      this.filtro_mostrar_peliculas.nativeElement.classList.toggle('border-blue');
      this.filtro_mostrar_peliculas.nativeElement.querySelector('mat-icon').classList.toggle('visibility-hidden')
      this.filtro_mostrar_series.nativeElement.classList.remove('border-blue');
      this.filtro_mostrar_series.nativeElement.querySelector('mat-icon').classList.add('visibility-hidden')
      this.movie1.nativeElement.classList.remove('display-none')
      this.movie2.nativeElement.classList.remove('display-none')
      this.serie.nativeElement.classList.add('display-none')
    })
    // listen filtro_mostrar_series
    this.filtro_mostrar_series.nativeElement.addEventListener('click', () => {
      this.filtro_mostrar_series.nativeElement.classList.toggle('border-blue');
      this.filtro_mostrar_series.nativeElement.querySelector('mat-icon').classList.toggle('visibility-hidden')
      this.filtro_mostrar_peliculas.nativeElement.classList.remove('border-blue');
      this.filtro_mostrar_peliculas.nativeElement.querySelector('mat-icon').classList.add('visibility-hidden')
      this.movie1.nativeElement.classList.add('display-none')
      this.movie2.nativeElement.classList.add('display-none')
      this.serie.nativeElement.classList.remove('display-none')
    })
    // listen btn quitar filtros
    this.filtro_quitar_filtros.nativeElement.addEventListener('click', () => {
      this.filtro_mostrar_peliculas.nativeElement.classList.remove('border-blue');
      this.filtro_mostrar_peliculas.nativeElement.querySelector('mat-icon').classList.add('visibility-hidden')
      this.filtro_mostrar_series.nativeElement.classList.remove('border-blue');
      this.filtro_mostrar_series.nativeElement.querySelector('mat-icon').classList.add('visibility-hidden')
      this.filtro_duracion.reset()
      this.movie1.nativeElement.classList.remove('display-none')
      this.movie2.nativeElement.classList.remove('display-none')
      this.serie.nativeElement.classList.remove('display-none')
    })
    // listen input buscador
    this.buscador.nativeElement.addEventListener('keyup', () => {
      clearTimeout(this.timeout_search)
      var icon = this.container_hint_resultados.nativeElement.querySelector('mat-icon');
      var text = this.container_hint_resultados.nativeElement.querySelector('h2');
      var spinner = this.container_hint_resultados.nativeElement.querySelector('mat-spinner');
      var texto_ingresado = this.buscador.nativeElement.value
      this.resultados.nativeElement.classList.add('display-none')
      icon.classList.add('display-none')
      text.classList.remove('display-none')
      text.firstChild.nodeValue = `Buscando "${texto_ingresado}"`
      spinner.classList.remove('display-none')
      if (texto_ingresado.trim() != '') {
        this.timeout_search = setTimeout(() => {
          spinner.classList.add('display-none')
          icon.classList.remove('display-none')
          if (texto_ingresado == "error") {
            text.innerHTML = `No se han encontrado resultados`
          } else {
            this.resultados.nativeElement.classList.remove('display-none')
            icon.classList.add('display-none')
            text.classList.add('display-none')
          }
        }, 2000);
      } else {
        this.resultados.nativeElement.classList.add('display-none')
        icon.classList.remove('display-none')
        text.innerHTML = 'Los resultados de tu búsqueda aparecerán aquí'
        spinner.classList.add('display-none')
      }
    })
  }
}
