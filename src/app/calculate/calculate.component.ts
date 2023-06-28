import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  display: string = ''; // Variable to hold the displayed calculation
  
  handleButtonClick(value: string): void {
    if (value === '=') {
      this.calculateResult();
    } else {
      this.display += value;
    }
  }
  
  calculateResult(): void {
    try {
      // Use the eval function to evaluate the calculation string
      const result = eval(this.display);
      
      // Update the display with the calculated result
      this.display = result.toString();
    } catch (error) {
      // Handle any calculation errors
      console.error('Calculation error:', error);
    }
  }
}
