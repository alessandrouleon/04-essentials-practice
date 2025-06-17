import { Injectable, signal } from "@angular/core";
import { AnnualData, InvertmentInput } from "./investment-input.model";


@Injectable({ providedIn: 'root' })

export class InvestmentService {

  resultData = signal<AnnualData[] | undefined>(undefined);

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
    this.resultData.set(annualData);

  }
}