import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
  projects: any = [
    {
      title: 'El Pollo Loco',
      technology: 'HTML | CSS | JavaScript',
      description:
        'In this object-oriented jump and run game with one level, players must navigate through obstacles and enemies to reach the end. Beware of the big chicken, a fearsome and endless foe.',
      liveLink: 'https://www.boubkir-benamar.de/El-Pollo-Loco/',
      gitLink: 'https://github.com/Boubkir/El-Pollo-Loco',
      img: 'el-pollo-loco.png',
    },
    {
      title: 'Join',
      technology: 'HTML | CSS | JavaScript',
      description:
        'I developed a Kanban tool using JavaScript, HTML, and CSS. It allows for easy incident creation with subtasks, and enables drag-and-drop functionality to move tickets across various status levels.',
      liveLink: 'https://www.boubkir-benamar.de/join/',
      gitLink: 'https://github.com/Boubkir/join',
      img: 'join.png',
    },
    {
      title: 'Ring of Fire',
      technology: 'ANGULAR | TYPESCRIPT | JAVASCRIPT | FIREBASE | HTML | CSS',
      description:
        'Enjoy a fun-filled card game with friends on multiple devices simultaneously! Angular, TypeScript, HTML, CSS and Firebase power the game, featuring exciting instructions after every card pick. Let the fun begin!',
      liveLink: 'https://www.boubkir-benamar.de/ringoffire/',
      gitLink: 'https://github.com/Boubkir/ringoffire',
      img: 'ring-of-fire.png',
    },
  ];
}
