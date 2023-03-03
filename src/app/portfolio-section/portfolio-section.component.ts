import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
  examples: any = [
    {
      title: 'El Pollo Loco',
      technology: 'HTML | CSS | JavaScript',
      description: 'Jump and run Game',
      liveLink: 'https://www.boubkir-benamar.de/El-Pollo-Loco/',
      gitLink: 'https://github.com/Boubkir/El-Pollo-Loco',
      img: 'el-pollo-loco.png',
    },
    {
      title: 'Join',
      technology: 'HTML | CSS | JavaScript',
      description: 'Kanbaaan',
      liveLink: '',
      gitLink: '',
      img: 'el-pollo-loco.png',
    },
  ];
}
