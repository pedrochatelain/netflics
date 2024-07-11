import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("input_user")
  input_user!: ElementRef;

  @ViewChild("input_password")
  input_password!: ElementRef;

  @ViewChild("div_password")
  div_password!: ElementRef;

  @ViewChild("div_user")
  div_user!: ElementRef;
  
  @ViewChild("btn_login")
  btn_login!: ElementRef;
  
  @ViewChild("loading")
  loading!: ElementRef;
  
  @ViewChild("container_perfiles")
  container_perfiles!: ElementRef;

  @ViewChild("perfiles")
  perfiles!: ElementRef;

  ngAfterViewInit() {
    this.input_user.nativeElement.focus();
    var icon_show_password = this.div_password.nativeElement.querySelector('.icon-show-password');
    var icon_hide_password = this.div_password.nativeElement.querySelector('.icon-hide-password');
    
    icon_show_password.addEventListener('click', () => {
      this.input_password.nativeElement.type = "text",
      icon_show_password.classList.add('display-none')
      icon_hide_password.classList.remove('display-none')
    })

    icon_hide_password.addEventListener('click', () => {
      this.input_password.nativeElement.type = "password",
      icon_hide_password.classList.add('display-none')
      icon_show_password.classList.remove('display-none')
    })

    this.btn_login.nativeElement.addEventListener('click', () => {
      this.input_password.nativeElement.classList.add('animation-hide'),
      icon_show_password.classList.add('animation-hide'),
      icon_hide_password.classList.add('animation-hide')
      this.div_password.nativeElement.querySelector('p').classList.add('animation-hide')

      this.input_user.nativeElement.classList.add('animation-hide'),
      this.div_user.nativeElement.querySelector('p').classList.add('animation-hide')

      this.btn_login.nativeElement.classList.add('animation-hide')
      setTimeout(() => {
        this.loading.nativeElement.classList.remove('display-none')        
        this.loading.nativeElement.classList.add('animation-show')        
      }, 300);
      setTimeout(() => {
        this.loading.nativeElement.classList.remove('animation-show')        
        this.loading.nativeElement.classList.add('animation-hide')        
      }, 2000);      
      setTimeout(() => {
        this.container_perfiles.nativeElement.classList.remove('display-none')        
        this.container_perfiles.nativeElement.classList.add('animation-show')        
        // this.container_perfiles.nativeElement.classList.add('animation-hide')        
      }, 2400);

      var perfiles = this.perfiles.nativeElement.querySelectorAll('img');
      perfiles.forEach((perfil: any) => {
        perfil.addEventListener('mouseover', (event: Event) => {
          var element = event.target as HTMLElement
          element.nextElementSibling!.classList.add('underline-text')
          perfil.classList.add('add-border-img')
        })
        perfil.addEventListener('mouseout', (event: Event) => {
          var element = event.target as HTMLElement
          element.nextElementSibling!.classList.remove('underline-text')
          perfil.classList.remove('add-border-img')
        })
      });



    })
  }

  jumpToNextInput(){
    console.log(this.input_password)
    this.input_password.nativeElement.focus();
  }

}
