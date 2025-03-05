import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faCoffee = faCoffee;
  faBars = faBars;
  isVisible = false;
  faClose = faClose
  isActive: boolean = false;

  ngOnInit() {
    this.checkScrollPosition();
  }
  ngAfterViewInit(): void {
    // Aqui você pode configurar um evento de scroll
    window.addEventListener('scroll', this.checkScrollPosition);
  }

  menu() {
    let content = document.querySelector('.content') as HTMLLIElement;
    this.isVisible = !this.isVisible;

    this.isActive = !this.isActive;

    if (this.isVisible === false) {
      content.style.right = '-150%';
      content.style.transform = 'skew(20deg)';
    } else if (this.isVisible === true) {
      content.style.right = '0';
      content.style.transform = 'skew(0deg)';
    }

    content.addEventListener('transitionend', () => {
      if (this.isVisible === false) {
        content.style.transform = 'skew(-20deg)'; // Novo valor de skew após a animação
      } else {
        content.style.transform = 'skew(0deg)'; // Novo valor de skew após a animação
      }
    });
  }
  checkScrollPosition() {
    let container = document.querySelector('.container') as HTMLLIElement;
    let name = document.querySelector('.name') as HTMLLIElement;
    let item = document.querySelector('.item') as HTMLLIElement;
    let item2 = document.querySelector('.item2') as HTMLLIElement;
    let responsive = document.querySelector('.responsive') as HTMLLIElement;

    if (window.scrollY === 0) {
      container.style.background = "transparent"

    } else {
      container.style.background = "#f7f7f7"
    
    }
  }
}
