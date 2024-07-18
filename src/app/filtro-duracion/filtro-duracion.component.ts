import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filtro-duracion',
  templateUrl: './filtro-duracion.component.html',
  styleUrls: ['./filtro-duracion.component.css']
})
export class FiltroDuracionComponent {

  constructor(private eRef: ElementRef) {}

  @ViewChild("btn")
  btn_duracion!: ElementRef;
  
  @ViewChild("body")
  body!: ElementRef;

  @ViewChild("container_opciones")
  container_opciones!: ElementRef;
  
  @ViewChild("opcion_mas_de_una_hora")
  opcion_mas_de_una_hora!: ElementRef;
  
  @ViewChild("opcion_menos_de_una_hora")
  opcion_menos_de_una_hora!: ElementRef;
  
  @ViewChild("opcion_treinta_minutos")
  opcion_treinta_minutos!: ElementRef;

  isActiveOpcionMasDeUnaHora = false;
  isActiveOpcionMenosDeUnaHora = false;
  isActiveOpcionTreintaMinutos = false;

  ngAfterViewInit() {
    this.btn_duracion.nativeElement.addEventListener('click', () => {
      this.isActiveOpcionMasDeUnaHora = false;
      this.isActiveOpcionMenosDeUnaHora = false;
      this.isActiveOpcionTreintaMinutos = false;
    })

    this.opcion_mas_de_una_hora.nativeElement.addEventListener('click', () => {
      this.isActiveOpcionMasDeUnaHora = true;
      this.btn_duracion.nativeElement.querySelector('p').innerHTML = "Duración: más de una hora"
      this.btn_duracion.nativeElement.classList.add('border-blue')
      this.container_opciones.nativeElement.classList.add('display-none')
    })

    this.opcion_menos_de_una_hora.nativeElement.addEventListener('click', () => {
      this.isActiveOpcionMenosDeUnaHora = true;
      this.btn_duracion.nativeElement.querySelector('p').innerHTML = "Duración: menos de una hora"
      this.btn_duracion.nativeElement.classList.add('border-blue')
      this.container_opciones.nativeElement.classList.add('display-none')
    })

    this.opcion_treinta_minutos.nativeElement.addEventListener('click', () => {
      this.isActiveOpcionTreintaMinutos = true;
      this.btn_duracion.nativeElement.querySelector('p').innerHTML = "Duración: 30 minutos"
      this.btn_duracion.nativeElement.classList.add('border-blue')
      this.container_opciones.nativeElement.classList.add('display-none')
    })
  }

  show_or_hide() {
    this.body.nativeElement.classList.toggle('display-none')
  }

  @HostListener('document:click', ['$event'])
  clickout(event:Event) {
    var opciones = this.container_opciones.nativeElement.querySelectorAll(".opcion");
    if(this.eRef.nativeElement.contains(event.target)) {
      if ( ! this.isActiveOpcionMasDeUnaHora && ! this.isActiveOpcionMenosDeUnaHora && ! this.isActiveOpcionTreintaMinutos) {
        this.isActiveOpcionMasDeUnaHora = false
        this.isActiveOpcionMenosDeUnaHora = false
        this.isActiveOpcionTreintaMinutos = false;
        this.container_opciones.nativeElement.classList.remove('display-none')
        opciones.forEach((element:any) => {
          element.classList.remove('opacity-zero');
          element.classList.remove('disp');
        });
      }
    } else {
      this.container_opciones.nativeElement.classList.add('display-none')
      opciones.forEach((element:any) => {
        element.classList.add('opacity-zero');
        element.classList.add('disp');
      });
    }
  }

}
