import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  scrollPercentage = 0;
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;


  @HostListener('window:scroll', [])
  onScroll(): void {
    
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    this.scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    let percentage = Math.floor(this.scrollPercentage)
    this.progressBar.nativeElement.style.width = `${percentage}%`
    
    // progress.style.width = `20%`

  }

 
}
