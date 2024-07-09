import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-continuar-viendo',
  templateUrl: './movie-continuar-viendo.component.html',
  styleUrls: ['./movie-continuar-viendo.component.css']
})
export class MovieContinuarViendoComponent {

  @ViewChild("play_button")
  play_button!: ElementRef;

  @ViewChild("movie")
  movie!: ElementRef;

  @Input()
  image = "";

  // @Input()
  // title = "";

  // ngAfterViewInit() {
  //   this.btn.nativeElement
  //   .addEventListener('click', () => {
  //     var opciones = this.opciones.nativeElement.querySelectorAll(".opcion");
  //     opciones.forEach((element:any) => {
  //       element.classList.toggle('display-none');
  //       element.classList.toggle('disp');
  //     });
  //   });
  //   ;
  // }

  ngAfterViewInit() {
    this.play_button.nativeElement
    .addEventListener('mouseover', () => {
      this.play_button.nativeElement.classList.remove("display_none")      
      this.movie.nativeElement.classList.add("movie_hover")
      
      

    });

    this.movie.nativeElement
    .addEventListener('mouseover', () => {
      this.movie.nativeElement.classList.add("movie_hover"),
      this.play_button.nativeElement.classList.remove("display_none")
    });

    this.movie.nativeElement
    .addEventListener('mouseout', () => {
      this.movie.nativeElement.classList.remove("movie_hover"),
      this.play_button.nativeElement.classList.add("display_none")
    });
  }

}
