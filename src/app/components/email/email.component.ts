import { Component } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { send } from '@emailjs/browser';
@Component({
  selector: 'app-email',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("click")
    // if (this.contactForm.valid) {
    //   send('service_v39yy8g', 'template_h7apwqs', this.contactForm.value, '4YcZhh2SMwAOHTDZS')
    //     .then((response : any) => {
    //       console.log('E-mail enviado com sucesso!', response);
    //     })
    //     .catch((error : any) => {
    //       console.error('Erro ao enviar e-mail', error);
    //     });
    // }
  }
}
