import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tetx-picture-div',
  templateUrl: './tetx-picture-div.component.html',
  styleUrls: ['./tetx-picture-div.component.scss'],
})
export class TetxPictureDivComponent {
  @Input() title: any;
  @Input() img: any;
  @Input() technology: any;
  @Input() description: any;
  @Input() liveLink: any;
  @Input() gitLink: any;
}
