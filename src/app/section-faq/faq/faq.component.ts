import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  @Input()
  title = "";

  @Input()
  text = "";

  @ViewChild("header_faq")
  header_faq!: ElementRef;
  
  @ViewChild("content_faq")
  content_faq!: ElementRef;

  isContentFaqOpen: boolean = false;

  ngAfterViewInit() {
    // var icon_thumb = this.box_comment.nativeElement.querySelector('.mat-icon');
    var icon_show = this.header_faq.nativeElement.querySelector('.icon-show')
    var icon_hide = this.header_faq.nativeElement.querySelector('.icon-hide')
    this.header_faq.nativeElement.addEventListener('click', () => {
      if ( ! this.isContentFaqOpen) {
        this.content_faq.nativeElement.classList.remove('display-none')
        this.content_faq.nativeElement.classList.add('animation-show')
        this.isContentFaqOpen = true;
        icon_show.classList.add('display-none')
        icon_hide.classList.remove('display-none')
      }
      else {
        this.content_faq.nativeElement.classList.remove('animation-show')
        this.content_faq.nativeElement.classList.add('animation-hide')
        this.isContentFaqOpen = false;
        icon_hide.classList.add('display-none')
        icon_show.classList.remove('display-none')
      }
    })
  }
  
}
