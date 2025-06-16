import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from './../investment.service';


@Component({
  selector: 'app-use-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './use-input.component.html',
  styleUrl: './use-input.component.css'
})
export class UseInputComponent {

  // @Output() calculate = new EventEmitter<InvertmentInput>();
  // calculate = output<InvertmentInput>();
  constructor(private investmentService: InvestmentService) { }

  formState = signal({
    enteredInitialInverstment: '0',
    enteredAnnualInvestment: '0',
    enteredExpectedReturn: '5',
    enteredDuration: '10'
  });
  onSubmit() {
    const state = this.formState();
    this.investmentService.onCalculateInvertimentResults({
      initialInvestment: +state.enteredInitialInverstment,
      duration: +state.enteredDuration,
      expectedReturn: +state.enteredExpectedReturn,
      annualInvestment: +state.enteredAnnualInvestment
    })

    this.formState.set({
      enteredInitialInverstment: '0',
      enteredAnnualInvestment: '0',
      enteredExpectedReturn: '5',
      enteredDuration: '10'
    });
  }
}
