import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import * as AOS from 'aos'

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss'
})
export class Section4Component {
  faAngleDown = faAngleDown

  
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // duração em milissegundos
      easing: 'ease-in-out', // tipo de easing
      once: false, // animação só ocorre uma vez
    });

  }
}
