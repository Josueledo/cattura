import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';
import { ContactButtonComponent } from '../contact-button/contact-button.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Section3Component } from "../section3/section3.component";
import { Section4Component } from "../section4/section4.component";

import * as AOS from 'aos'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FontAwesomeModule,
    FooterComponent,
    ContactButtonComponent,
    CommonModule,
    Section3Component,
    Section4Component
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent{
  faAngleRight = faAngleRight;
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('carousel2', { static: false }) carousel2!: ElementRef;
  
  itemHeight = 200; // Altura de cada item


  items = [
    { imagem: '/foto1.png' },
    { imagem: '/foto3.png' },
    { imagem: '/foto4.png' },
    { imagem: '/foto5.png' },
  ];
  clone:any = []
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    AOS.init({
      duration: 800, // duração em milissegundos
      easing: 'ease-in-out', // tipo de easing
      once: false, // animação só ocorre uma vez
    });

  }



  


  
}
