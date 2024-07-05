import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filtro-duracion',
  templateUrl: './filtro-duracion.component.html',
  styleUrls: ['./filtro-duracion.component.css']
})
export class FiltroDuracionComponent {

  @ViewChild("btn")
  btn!: ElementRef;

  @ViewChild("opciones")
  opciones!: ElementRef;

  ngAfterViewInit() {
    this.btn.nativeElement
    .addEventListener('click', () => {
      var opciones = this.opciones.nativeElement.querySelectorAll(".opcion");
      opciones.forEach((element:any) => {
        element.classList.toggle('display-none');
        element.classList.toggle('disp');
      });
      
      

    });
    ;
  }
}
