import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  @Input()
  is_series: boolean = false;

  @Input()
  src_image: boolean = false;

  @Input()
  title: String = ''

  @Input()
  description: String = ''

  @Input()
  src_image_episode_1: String = '';

  @Input()
  src_image_episode_2: String = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(v => {
      this.is_series =  v['is_serie']
      this.src_image = v['src_image']
      this.title = v['title']
      this.description = v['description']
      this.src_image_episode_1 = v['src_image_episode_1']
      this.src_image_episode_2 = v['src_image_episode_2']
    });
  }

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
