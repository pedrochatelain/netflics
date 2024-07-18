import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filtro-duracion',
  templateUrl: './filtro-duracion.component.html',
  styleUrls: ['./filtro-duracion.component.css']
})
export class FiltroDuracionComponent {
  show_or_hide() {
    this.body.nativeElement.classList.toggle('display-none')
  }

  @ViewChild("btn")
  btn!: ElementRef;
  
  @ViewChild("body")
  body!: ElementRef;

  @ViewChild("opciones")
  opciones!: ElementRef;

  ngAfterViewInit() {
    this.btn.nativeElement
    .addEventListener('click', () => {
      var opciones = this.opciones.nativeElement.querySelectorAll(".opcion");
      opciones.forEach((element:any) => {
        element.classList.toggle('opacity-zero');
        element.classList.toggle('disp');
      });
      
      

    });
    ;
  }
}
