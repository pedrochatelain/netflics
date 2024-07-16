import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  
  @ViewChild("container_add_favorites")
  container_add_favorites!: ElementRef;
  
  @ViewChild("container_loading")
  container_loading!: ElementRef;
  
  @ViewChild("container_added_to_favorites")
  container_added_to_favorites!: ElementRef;

  ngAfterViewInit() {
    this.container_add_favorites.nativeElement.addEventListener('click', () => {
      this.container_add_favorites.nativeElement.classList.add('display-none')
      this.container_loading.nativeElement.classList.remove('display-none')
      setTimeout(() => {
        this.container_loading.nativeElement.classList.add('animation-hide')
      }, 2000);
      this.container_loading.nativeElement.addEventListener('animationend', () => {
        this.container_loading.nativeElement.classList.add('display-none')
        this.container_added_to_favorites.nativeElement.classList.remove('display-none')
        this.container_added_to_favorites.nativeElement.classList.add('animation-show')
      })
    })
  }
}
