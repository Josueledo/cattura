import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';
import { ContactButtonComponent } from "../contact-button/contact-button.component";
import { EmailComponent } from "../email/email.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, FooterComponent, ContactButtonComponent, EmailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faAngleRight= faAngleRight


}
