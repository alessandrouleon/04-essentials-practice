"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvestmentsResultsComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var InvestmentsResultsComponent = /** @class */ (function () {
    function InvestmentsResultsComponent() {
    }
    __decorate([
        core_1.Input()
    ], InvestmentsResultsComponent.prototype, "results");
    InvestmentsResultsComponent = __decorate([
        core_1.Component({
            selector: 'app-investments-results',
            imports: [common_1.CurrencyPipe],
            templateUrl: './investments-results.component.html',
            styleUrl: './investments-results.component.css'
        })
    ], InvestmentsResultsComponent);
    return InvestmentsResultsComponent;
}());
exports.InvestmentsResultsComponent = InvestmentsResultsComponent;
