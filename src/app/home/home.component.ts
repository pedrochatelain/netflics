import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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

  
  @ViewChild("anterior")
  anterior!: ElementRef;

  coef = 0;
  cantEstrenos = 3;
  numberOfClicksOnProx = 0;
  numberOfClicksOnAnterior = 0;



  ngAfterViewInit() {
    this.anterior.nativeElement.classList.add("display-none")
    var movies = this.container.nativeElement.querySelectorAll(".movie");
    this.prox.nativeElement.addEventListener('click', () => {
      this.anterior.nativeElement.classList.remove("display-none")
      this.coef += 100;
      movies.forEach((element:any) => {
        element.style.transform = `translateX(${-this.coef}%)`
      });
      if (this.coef == 200) {
        this.prox.nativeElement.classList.add("display-none")
      }
    });

    this.anterior.nativeElement.addEventListener('click', () => {
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
