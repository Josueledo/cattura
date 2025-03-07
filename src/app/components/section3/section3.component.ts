import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartSimple, faBullseye, faLeaf } from '@fortawesome/free-solid-svg-icons';


import * as AOS from 'aos'

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component {
  faChartSimple = faChartSimple
  faBullseye = faBullseye
  faLeaf = faLeaf

  ngOnInit(): void {
    AOS.init({
      duration: 800, // duração em milissegundos
      easing: 'ease-in-out', // tipo de easing
      once: false, // animação só ocorre uma vez
    });

  }
}
