import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  imports: [CurrencyPipe],
  standalone: true,
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {

  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());


}
