import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operator',
  template: `
    <button class="operator" (click)="performOperation()">{{ operator }}</button>
  `,
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent {
  @Input() operator: string = '';

  performOperation() {
    // Logic to handle the operation based on the operator
    console.log('Operator clicked:', this.operator);
  }
}
