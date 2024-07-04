import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-premiere',
  templateUrl: './movie-premiere.component.html',
  styleUrls: ['./movie-premiere.component.css']
})
export class MoviePremiereComponent {
  @Input() image_preview: string = "";
  @Input() title: string = "";
  @Input() type: string = "";
}
