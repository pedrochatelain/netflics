import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {

  @Input()
  username: String = ""

  @Input()
  url_photo_profile: String = ""

  @Input()
  date: String = ""

  

}
