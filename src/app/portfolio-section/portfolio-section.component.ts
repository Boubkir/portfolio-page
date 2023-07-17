import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
  projects: any = [
    {
      title: 'Join',
      technology: 'ANGULAR | TYPESCRIPT | DJANGO | HTML | CSS',
      description:
        'I have developed a full-stack Kanban application using TypeScript, Angular, and Django. The application allows users to create incidents with subtasks and provides a seamless drag-and-drop interface for managing tickets across different status levels. The frontend is built with TypeScript and Angular, while the backend is powered by Django, enabling robust data management and seamless communication between the frontend and backend components.',
      liveLink: 'https://www.boubkir-benamar.de/join/',
      gitLink: 'https://github.com/Boubkir/Join-Fullstack-App',
      img: 'join.png',
    },
    {
      title: 'Slack-Clone',
      technology: 'ANGULAR | TYPESCRIPT | FIREBASE | HTML | CSS',
      description:
        "Slack clone using a Firebase backend, allowing users to engage in both private and group chats. This project showcases my skills in building real-time communication applications. Explore the seamless chat experience and discover how I've leveraged Firebase to deliver a robust and user-friendly solution.",
      liveLink: 'https://www.boubkir-benamar.de/slack-clone',
      gitLink: 'https://github.com/Boubkir/Slack-Clone',
      img: 'slack-clone.png',
    },
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
      title: 'Portfolio Page',
      technology: 'ANGULAR | TYPESCRIPT | HTML | CSS',
      description:
        "Welcome to my portfolio page! I'm excited to share with you some of the projects I've worked on using Angular, TypeScript, HTML, and CSS. Browse through my collection of works and see how I've applied my skills to create beautiful and functional applications.",
      liveLink: 'https://www.boubkir-benamar.de',
      gitLink: 'https://github.com/Boubkir/portfolio-page',
      img: 'portfolio.png',
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
