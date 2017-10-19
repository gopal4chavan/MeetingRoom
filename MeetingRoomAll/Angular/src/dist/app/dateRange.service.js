"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DateRange = (function () {
    function DateRange() {
        this.range = [];
    }
    DateRange.prototype.getDateRange = function (date) {
        // this.startDate=date.start._d.toLocaleDateString();
        // this.endDate=date.end._d.toLocaleDateString();
        this.startDate = new Date(date.start._d.toString().slice(0, 15));
        this.endDate = new Date(date.end._d.toString().slice(0, 15));
        var temp_date = new Date(this.startDate);
        this.index = 0;
        this.range = [];
        console.log(this.startDate);
        console.log(this.endDate);
        console.log(temp_date);
        while (temp_date <= this.endDate) {
            this.range[this.index] = new Date(temp_date).toString().slice(0, 15);
            temp_date.setDate(temp_date.getDate() + 1);
            this.index = this.index + 1;
        }
        console.log(this.index);
        console.log(this.range);
        return this.range;
    };
    return DateRange;
}());
DateRange = __decorate([
    core_1.Injectable()
], DateRange);
exports.DateRange = DateRange;
//# sourceMappingURL=dateRange.service.js.map