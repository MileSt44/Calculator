import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  calculationResult: string | number = '0';

  onDigitClick(digit: number) {
    this.calculationResult = this.calculationResult === '0' ? digit.toString() : this.calculationResult.toString() + digit.toString();
  }
  

  onOperatorClick(operator: string) {
    this.calculationResult += operator;
  }
  

  calculateResult() {
    // Implement the logic to calculate the result
  }
}
