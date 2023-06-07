import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operator',
  template: `
    <button class="operator" (click)="writeOperator()">{{ operator }}</button>
  `,
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent {
  @Input() operator: string | undefined;
  @Output() operatorClicked = new EventEmitter<string>();

  writeOperator() {
    this.operatorClicked.emit(this.operator);
  }
}
