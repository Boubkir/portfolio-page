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
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque incidunt, inventore eius facilis, reprehenderit in autem iusto voluptates ipsam sequi nostrum facere voluptatum doloremque qui repellendus soluta alias dolor?',
      liveLink: 'https://www.boubkir-benamar.de/El-Pollo-Loco/',
      gitLink: 'https://github.com/Boubkir/El-Pollo-Loco',
      img: 'el-pollo-loco.png',
    },
    {
      title: 'Join',
      technology: 'HTML | CSS | JavaScript',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque incidunt, inventore eius facilis, reprehenderit in autem iusto voluptates ipsam sequi nostrum facere voluptatum doloremque qui repellendus soluta alias dolor?',
      liveLink: 'https://www.boubkir-benamar.de/join/',
      gitLink: 'https://github.com/Boubkir/join',
      img: 'el-pollo-loco.png',
    },
  ];
}
