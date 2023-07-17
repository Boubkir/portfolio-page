import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-text-div',
  templateUrl: './picture-text-div.component.html',
  styleUrls: ['./picture-text-div.component.scss'],
})
export class PictureTextDivComponent {
  @Input() title: any;
  @Input() img: any;
  @Input() technology: any;
  @Input() description: any;
  @Input() liveLink: any;
  @Input() gitLink: any;
}
