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

  openMenu() {
    if (this.menuOpen) {
      this.closeMenu();
    } else {
      this.nav.nativeElement.classList.add('show-menu');
      this.menuBars.nativeElement.src = 'assets/img/menu-close.png';
      this.menuOpen = true;
    }
  }

  closeMenu() {
    this.nav.nativeElement.classList.remove('show-menu');
    this.menuBars.nativeElement.src = 'assets/img/menu-bars.png';
    this.menuOpen = false;
  }
}
