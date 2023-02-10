import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
  pictureTextContent: any = [
    {
      'project-name': 'Join',
      language: 'HTML | CSS | JavaScript',
      description:
        'Kanban Project Management Tool',
      'live-test-link': '',
      'github-link': '',
      img: 'el-pollo-loco.png',
    },
    {
      'project-name': 'El Pollo Loco',
      language: 'HTML | CSS | JavaScript',
      description: 'Jump and run Game',
      'live-test-link': 'mfnv jdkönfhäroequhnfä',
      'github-link': 'nrf -jklenöhäfoihq3',
      img: 'el-pollo-loco.png',
    },
  ];
}
