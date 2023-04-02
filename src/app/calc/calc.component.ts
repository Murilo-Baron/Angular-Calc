import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  result: string = '';

  addNumber(num: number) {
    this.result += num;
  }

  addOperator(operator: string) {
    this.result += operator;
  }

  clear() {
    this.result = '';
  }

  calculate() {
    this.result = eval(this.result);
  }
}


