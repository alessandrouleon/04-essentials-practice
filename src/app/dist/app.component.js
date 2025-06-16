"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var header_component_1 = require("./header/header.component");
var investments_results_component_1 = require("./investments-results/investments-results.component");
var use_input_component_1 = require("./use-input/use-input.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.results = core_1.signal(undefined);
    }
    AppComponent.prototype.onCalculateInvertimentResults = function (data) {
        var initialInvestment = data.initialInvestment, annualInvestment = data.annualInvestment, expectedReturn = data.expectedReturn, duration = data.duration;
        var annualData = [];
        var invertmentVolume = initialInvestment;
        for (var i = 0; i < duration; i++) {
            var year = i + 1;
            var interestEarnedYear = invertmentVolume * (expectedReturn / 100);
            invertmentVolume += interestEarnedYear + annualInvestment;
            var totalInterest = invertmentVolume - initialInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interval: interestEarnedYear,
                valueEndOfYear: invertmentVolume,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year
            });
        }
        this.results.set(annualData);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            imports: [router_1.RouterOutlet, header_component_1.HeaderComponent, use_input_component_1.UseInputComponent, investments_results_component_1.InvestmentsResultsComponent],
            templateUrl: './app.component.html',
            styleUrl: './app.component.css'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
