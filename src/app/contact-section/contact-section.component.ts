import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    nameField.style.pointerEvents = 'none';
    emailField.style.pointerEvents = 'none';
    messageField.style.pointerEvents = 'none';
    sendButton.style.pointerEvents = 'none';
    sendButton.style.background = '#4b47ff';
    sendButton.innerHTML = 'Has been sent :)';

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('mail', emailField.value);
    formData.append('message', messageField.value);

    await fetch(
      'https://boubkir-benamar.de/send_mail/send_mail.php',
      {
        method: 'post',
        body: formData,
      }
    );

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
