import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { InvestmentsResultsComponent } from "./investments-results/investments-results.component";
import { UseInputComponent } from "./use-input/use-input.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UseInputComponent, InvestmentsResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
