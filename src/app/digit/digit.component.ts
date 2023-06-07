import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-digit',
  template: `
    <button class="digit" (click)="writeDigit()">{{ digit }}</button>
  `,
  styleUrls: ['./digit.component.css']
})
export class DigitComponent {
  @Input() digit?: number;
  
  @Output() digitClicked = new EventEmitter<number>();

  writeDigit() {
    this.digitClicked.emit(this.digit);
  }
}
