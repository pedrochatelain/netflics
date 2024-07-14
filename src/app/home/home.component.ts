import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild("container")
  container!: ElementRef;

  @ViewChild("next")
  prox!: ElementRef;

  @ViewChild("container_next")
  container_next!: ElementRef;
  
  @ViewChild("anterior")
  anterior!: ElementRef;

  @ViewChild("container_anterior")
  container_anterior!: ElementRef;

  coef = 100;
  cantEstrenos = 3;
  numberOfClicksOnProx = 0;
  numberOfClicksOnAnterior = 0;



  ngAfterViewInit() {
    var movies = this.container.nativeElement.querySelectorAll(".movie");

    this.container_next.nativeElement.addEventListener('click', () => {
      this.anterior.nativeElement.classList.remove("display-none")
      this.coef += 100;
      movies.forEach((element:any) => {
        element.style.transform = `translateX(${-this.coef}%)`
      });
      if (this.coef == 200) {
        this.prox.nativeElement.classList.add("display-none")
      }
    });


    this.container_anterior.nativeElement.addEventListener('click', () => {
      this.prox.nativeElement.classList.remove("display-none")
      this.coef -= 100
      movies.forEach((element:any) => {
        element.style.transform = `translateX(${- this.coef}%)`
      });
      if (this.coef == 0) {
        this.anterior.nativeElement.classList.add("display-none")
      } 
    })

  }

}
