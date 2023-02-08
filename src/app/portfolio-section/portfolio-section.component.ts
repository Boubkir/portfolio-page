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
        'kldemwökjneqdföjkhqbnwföjqnwäekndmäwqKnmfäljqnwdkl-qemndäkqmnwä-d',
      'live-test-link': '',
      'github-link': '',
    },
    {
      'project-name': 'El Pollo Loco',
      language: 'sdn.kjnbchjbföjeln-lflkjbg-mhl-ezjtäir',
      description: 'fmnfröjhnwäojewnfq3kö',
      'live-test-link': 'mfnv jdkönfhäroequhnfä',
      'github-link': 'nrf -jklenöhäfoihq3',
    },
  ];
}
