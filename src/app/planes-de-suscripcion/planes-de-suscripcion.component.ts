import { Component, ElementRef, ViewChild } from '@angular/core';
import { PlanSuscripcionComponent } from './plan-suscripcion/plan-suscripcion.component';

@Component({
  selector: 'app-planes-de-suscripcion',
  templateUrl: './planes-de-suscripcion.component.html',
  styleUrls: ['./planes-de-suscripcion.component.css']
})
export class PlanesDeSuscripcionComponent {

  @ViewChild("body")
  body!: ElementRef;

  ngAfterViewInit() {
    var planes = this.body.nativeElement.querySelectorAll('app-plan-suscripcion')
    
    planes.forEach((element: HTMLElement) => {
      element.addEventListener('click', (e:Event) => {
        planes.forEach((el: HTMLElement) => {
          el.classList.add('blur')
          element.classList.remove('blur')
        })
      })
    });
    console.log(planes)
  }

}
