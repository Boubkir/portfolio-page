import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-text-div',
  templateUrl: './picture-text-div.component.html',
  styleUrls: ['./picture-text-div.component.scss'],
})
export class PictureTextDivComponent {
  @Input() content:any;
  @Input() img:any;
}
