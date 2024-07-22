import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plan-suscripcion',
  templateUrl: './plan-suscripcion.component.html',
  styleUrls: ['./plan-suscripcion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush    
})
export class PlanSuscripcionComponent {

  @ViewChild("perfil")
  perfil!: ElementRef;

  @ViewChild("container_button")
  container_button!: ElementRef;

  @Input()
  nombre: String = "";

  @Input()
  precio: String = "";

  @Input()
  calidad_video: String = "";

  @Input()
  resolucion: String = "";

  @Input()
  dispositivos: String = "";

  @Input()
  offline: boolean = false;

  @Input()
  libre_publicidades: boolean = false;

  @Input()
  cantidad_perfiles: String = "";
  
  @Input()
  text_button: String = "";

  @Input()
  premium: boolean = false;

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event:Event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.container_button.nativeElement.classList.remove('display-none')
      this.eRef.nativeElement.scrollIntoView({behavior: 'smooth'});
      this.container_button.nativeElement.classList.add('animation-enable-elegir-plan')
      this.eRef.nativeElement.querySelector('body').classList.add('border-blue')
      this.eRef.nativeElement.querySelector('body').classList.add('selected')
    } else {
      this.eRef.nativeElement.querySelector('body').classList.remove('selected')
      this.container_button.nativeElement.classList.add('display-none')
    }
  }

}
