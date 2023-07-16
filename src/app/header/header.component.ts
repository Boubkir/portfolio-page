import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('menuBars') menuBars: ElementRef;
  @ViewChild('nav') nav: ElementRef;

  menuOpen: any = false;

  toggleMenu() {
    if (!this.menuOpen) {
      this.menuBars.nativeElement.src = 'assets/img/menu-close.png';
      document.body.classList.add('fixed')
    } else {
      this.menuBars.nativeElement.src = 'assets/img/menu-bars.png';
       document.body.classList.remove('fixed');
    }
    this.menuOpen = !this.menuOpen;
  }
}
