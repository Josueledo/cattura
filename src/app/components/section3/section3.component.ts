import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component {
  faChartSimple = faChartSimple
}
