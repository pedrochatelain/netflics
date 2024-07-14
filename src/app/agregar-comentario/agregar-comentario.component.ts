import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-agregar-comentario',
  templateUrl: './agregar-comentario.component.html',
  styleUrls: ['./agregar-comentario.component.css']
})
export class AgregarComentarioComponent {

  // @ViewChild("thumb")
  // thumb!: ElementRef;

  @ViewChild("btn_comment")
  btn_comment!: ElementRef;
  
  @ViewChild("box_comment")
  box_comment!: ElementRef;
  
  @ViewChild("textarea")
  textarea!: ElementRef;
  
  @ViewChild("title")
  title!: ElementRef;

  @ViewChild("stars")
  stars!: ElementRef;
  
  @ViewChild("container_puntuacion")
  container_puntuacion!: ElementRef;

  ngAfterViewInit() {
    var icon_thumb = this.box_comment.nativeElement.querySelector('.mat-icon');
    
    this.btn_comment.nativeElement.addEventListener('click', () => {
      this.textarea.nativeElement.value = ''
      this.box_comment.nativeElement.classList.add('animation-circle')
      this.textarea.nativeElement.classList.add('animation-circle')
      this.textarea.nativeElement.placeholder = ''
      this.btn_comment.nativeElement.classList.add('animation-hide')
      this.title.nativeElement.classList.add('visibility-none')
      this.title.nativeElement.innerHTML = "Tu comentario ha sido guardado"
      setTimeout(() => {
        this.title.nativeElement.classList.remove('visibility-none')
        this.title.nativeElement.classList.add('animation-show')
        icon_thumb.classList.remove('display-none')
        icon_thumb.classList.add('animation-show')
      }, 800);
      setTimeout(() => {
        this.container_puntuacion.nativeElement.classList.remove('visibility-none')
        this.container_puntuacion.nativeElement.classList.add('animation-show')
      }, 1300);
    })
    
    let stars: Array<HTMLElement> = this.stars.nativeElement.querySelectorAll('mat-icon')

    stars.forEach((star:HTMLElement) => {
      star.addEventListener('click', () => {
        stars.forEach((s:HTMLElement) => {
          s.classList.add('empty-star')
        })
        for (let i = 0; i < stars.length; i++) {
          var s = stars[i];
          if (s == star) {
            s.classList.remove('empty-star')
            s.classList.add('painted-star')
            break
          }
          else {
            s.classList.remove('empty-star')
            s.classList.add('painted-star')
          }
        }
      })
    });
  }

}
