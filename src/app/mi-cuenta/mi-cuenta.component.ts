import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent {

  @ViewChild("body_mi_cuenta")
  body_mi_cuenta!: ElementRef;

  cerrado:boolean = false;
  
  ngAfterViewInit() {
    

    this.body_mi_cuenta.nativeElement.addEventListener('click', (event: Event) => {
      this.cerrado = true
    })
  }

}
