import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

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

  @Input()
  show_progression_bar: boolean = false;

  @Input()
  show_remaining_time: boolean = false;

  @Input()
  is_episode: boolean = false;
  
  @Input()
  is_continue_watching: boolean = false;

  @Input()
  episode_description: String = ''

  @Input()
  title: String = ''

  ngAfterViewInit() {
    if (window.innerWidth <= 800 && this.show_progression_bar) {
      this.play_button.nativeElement.classList.remove("display_none")
    } else {
      this.play_button.nativeElement.classList.add("display_none")
    }

    this.play_button.nativeElement
    .addEventListener('mouseover', () => {
      this.play_button.nativeElement.classList.remove("display_none")      
      this.movie.nativeElement.classList.add("movie_hover")
      
      

    });

    this.movie.nativeElement
    .addEventListener('mouseover', () => {
      if (this.show_progression_bar || this.is_episode) {
        this.movie.nativeElement.classList.add("movie_hover");
        this.play_button.nativeElement.classList.remove("display_none")
        this.play_button.nativeElement.classList.add("animation-show")
      } else {
        this.movie.nativeElement.classList.add("scale-movie");
        this.movie.nativeElement.classList.remove("unscale-movie");
      }
    });

    this.movie.nativeElement
    .addEventListener('mouseout', () => {
      if (this.show_progression_bar || this.is_episode) {
        this.play_button.nativeElement.classList.remove("animation-show")
        this.movie.nativeElement.classList.remove("movie_hover"),
        this.play_button.nativeElement.classList.add("display_none")
      } else {
        this.movie.nativeElement.classList.remove("scale-movie");
        this.movie.nativeElement.classList.add("unscale-movie");
      }
    });
  }

  
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth <= 800 && this.show_progression_bar) {
      this.play_button.nativeElement.classList.remove("display_none")
    } else {
      this.play_button.nativeElement.classList.add("display_none")
    }
  }
  
}

