import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-continuar-viendo',
  templateUrl: './continuar-viendo.component.html',
  styleUrls: ['./continuar-viendo.component.css']
})
export class ContinuarViendoComponent {

  @Input()
  title: String = "Continuar viendo"
  
  @Input()
  continuar_viendo: boolean = true;

  @Input()
  src_movie_one: String = '';

  @Input()
  src_movie_two: String = '';

  @Input()
  src_movie_three: String = '';

  @Input()
  src_movie_four: String = '';

  @Input()
  src_movie_five: String = '';

  @Input()
  is_watching: boolean = false;

  @ViewChild("container_show_more")
  container_show_more!: ElementRef;
  
  @ViewChild("container_show_less")
  container_show_less!: ElementRef;
  
  @ViewChild("container_movies")
  container_movies!: ElementRef;

  ngAfterViewInit() {
    if (this.container_movies.nativeElement.scrollLeft == 0) {
      this.container_show_less.nativeElement.classList.add('display-none')
    }

    this.container_show_more.nativeElement.addEventListener('click', () => {
      this.container_movies.nativeElement.scrollLeft += 500
      if (this.container_movies.nativeElement.scrollLeft == 0) {
        this.container_show_more.nativeElement.classList.add('display-none')
        this.container_show_less.nativeElement.classList.remove('display-none')
      }
      console.log(this.container_movies.nativeElement.scrollLeft)
    })
    
    this.container_show_less.nativeElement.addEventListener('click', () => {
      this.container_movies.nativeElement.scrollLeft -= 500
      this.container_show_less.nativeElement.classList.add('display-none')
      this.container_show_more.nativeElement.classList.remove('display-none')
      
      
    })
  }

  // const button = document.getElementById("slide");

  // button.onclick = () => {
  //   document.getElementById("container").scrollLeft += 20;
  // };

}
