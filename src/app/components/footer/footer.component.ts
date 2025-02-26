import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  activeIndex: number | null = null;

  faqs = [
    { question: "O que é a Cattura?", answer: "A Cattura é uma empresa especializada na criação de sites eficientes e bonitos.", open: false },
    { question: "Quanto tempo leva para criar um site?", answer: "O tempo varia conforme a complexidade, mas geralmente de 7 a 30 dias.", open: false },
    { question: "Posso atualizar meu site depois?", answer: "Sim! Oferecemos suporte para atualizações e melhorias contínuas.", open: false },
    { question: "Quais tecnologias vocês usam?", answer: "Utilizamos Angular, Node.js, bancos de dados modernos e práticas de SEO avançadas.", open: false }
  ];


  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;

  }
}
