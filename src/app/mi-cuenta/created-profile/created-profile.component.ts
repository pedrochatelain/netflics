import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-created-profile',
  templateUrl: './created-profile.component.html',
  styleUrls: ['./created-profile.component.css']
})
export class CreatedProfileComponent {

  @ViewChild("perfil")
  perfil!: ElementRef;
  
  @ViewChild("container_actions")
  container_actions!: ElementRef;

  constructor(private eRef: ElementRef) {}

  ngAfterViewInit() {
    this.perfil.nativeElement.addEventListener('click', () => {
      this.container_actions.nativeElement.classList.remove('display-none')
      this.perfil.nativeElement.classList.add('selected-profile')
    })
  }

  @HostListener('document:click', ['$event'])
  clickout(event:Event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      console.log("inside")
    } else {
      this.container_actions.nativeElement.classList.add('display-none')
      this.perfil.nativeElement.classList.remove('selected-profile')
    }
  }

}
