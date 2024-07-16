import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-created-profile',
  templateUrl: './created-profile.component.html',
  styleUrls: ['./created-profile.component.css']
})
export class CreatedProfileComponent {

  @Input()
  cerrado = 'false'
  
  @ViewChild("body")
  body!: ElementRef;

  @ViewChild("perfil")
  perfil!: ElementRef;
  
  @ViewChild("container_actions")
  container_actions!: ElementRef;

  ngAfterViewInit() {
    this.perfil.nativeElement.addEventListener('click', (e:Event)=> {
      this.container_actions.nativeElement.classList.toggle('display-none')
      this.perfil.nativeElement.classList.toggle('selected-profile')
    })

    // this.body.nativeElement.addEventListener('click', (event: Event) => {
    //   console.log(event.target)
    // })
  }

  public text: String;


  @HostListener('document:click', ['$event'])
  clickout(event:Event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      console.log("inside")
    } else {
      this.container_actions.nativeElement.classList.add('display-none')
      this.perfil.nativeElement.classList.remove('selected-profile')
    }
  }

  constructor(private eRef: ElementRef) {
    this.text = 'no clicks yet';
  }

}
