import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {

  // @Input() results?: AnnualData[];

  // results = input<AnnualData[] | undefined>();
  constructor(private investmentService: InvestmentService) { }

  get results() {
    return this.investmentService.resultData;
  }

}
