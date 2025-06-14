import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnnualData } from '../investment-input.model';

@Component({
  selector: 'app-investments-results',
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {

  @Input() results?: AnnualData[];

  // results = input<AnnualData[] | undefined>();

}
