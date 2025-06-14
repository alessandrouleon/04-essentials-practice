import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import type { AnnualData, InvertmentInput } from './investment-input.model';
import { InvestmentsResultsComponent } from "./investments-results/investments-results.component";
import { UseInputComponent } from "./use-input/use-input.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UseInputComponent, InvestmentsResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public results = signal<AnnualData[] | undefined>(undefined);
  onCalculateInvertimentResults(data: InvertmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

    const annualData = [];

    let invertmentVolume = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedYear = invertmentVolume * (expectedReturn / 100);
      invertmentVolume += interestEarnedYear + annualInvestment;
      const totalInterest = invertmentVolume - initialInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interval: interestEarnedYear,
        valueEndOfYear: invertmentVolume,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year
      })
    }
    this.results.set(annualData);

  }

}
