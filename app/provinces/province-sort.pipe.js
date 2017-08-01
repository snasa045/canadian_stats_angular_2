"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PopulationSortPipe = (function () {
    function PopulationSortPipe() {
    }
    PopulationSortPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.provincePopulation[args] < b.provincePopulation[args]) {
                return -1;
            }
            else if (a.provincePopulation[args] > b.provincePopulation[args]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return PopulationSortPipe;
}());
PopulationSortPipe = __decorate([
    core_1.Pipe({
        name: 'sort'
    })
], PopulationSortPipe);
exports.PopulationSortPipe = PopulationSortPipe;
//# sourceMappingURL=province-sort.pipe.js.map