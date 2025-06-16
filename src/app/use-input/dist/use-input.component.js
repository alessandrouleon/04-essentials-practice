"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UseInputComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UseInputComponent = /** @class */ (function () {
    function UseInputComponent() {
        // @Output() calculate = new EventEmitter<InvertmentInput>();
        this.calculate = core_1.output();
        this.formState = core_1.signal({
            enteredInitialInverstment: '0',
            enteredAnnualInvestment: '0',
            enteredExpectedReturn: '5',
            enteredDuration: '10'
        });
    }
    UseInputComponent.prototype.onSubmit = function () {
        var state = this.formState();
        this.calculate.emit({
            initialInvestment: +state.enteredInitialInverstment,
            duration: +state.enteredDuration,
            expectedReturn: +state.enteredExpectedReturn,
            annualInvestment: +state.enteredAnnualInvestment
        });
        this.formState.set({
            enteredInitialInverstment: '0',
            enteredAnnualInvestment: '0',
            enteredExpectedReturn: '5',
            enteredDuration: '10'
        });
    };
    UseInputComponent = __decorate([
        core_1.Component({
            selector: 'app-use-input',
            standalone: true,
            imports: [forms_1.FormsModule],
            templateUrl: './use-input.component.html',
            styleUrl: './use-input.component.css'
        })
    ], UseInputComponent);
    return UseInputComponent;
}());
exports.UseInputComponent = UseInputComponent;
