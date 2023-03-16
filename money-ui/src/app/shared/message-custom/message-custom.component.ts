import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-custom',
  template: `
    <p-message *ngIf="temErro()" severity="error" text="{{ text }}"></p-message>
  `,
  styles: [
  ]
})
export class MessageCustomComponent {

  @Input() error?: string;
  @Input() control?: FormControl;
  @Input() text?: string;

  temErro(): boolean {
    if(this.control != null && this.error != null && this.text != null) {
      return this.control.hasError(this.error) && this.control.dirty;
    }
    return false;
  }
}
