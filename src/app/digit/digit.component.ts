import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digit',
  template: `
    <button class="digit" (click)="writeDigit()">{{ digit }}</button>
  `,
  styleUrls: ['./digit.component.css']
})
export class DigitComponent {
  @Input() digit?: number;


  writeDigit() {
    // Logic to handle writing the digit
    console.log('Digit clicked:', this.digit);
  }
}
