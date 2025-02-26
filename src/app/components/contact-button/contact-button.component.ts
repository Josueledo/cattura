import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.scss'
})
export class ContactButtonComponent {
  faWandMagicSparkles= faWandMagicSparkles
}
