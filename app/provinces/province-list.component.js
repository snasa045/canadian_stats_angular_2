"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var province_service_1 = require("./province.service");
var core_1 = require("@angular/core");
var ProvinceListComponent = (function () {
    function ProvinceListComponent(_provinceService) {
        this._provinceService = _provinceService;
        this.pageTitle = 'Province List';
    }
    ProvinceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._provinceService.getProvinces()
            .subscribe(function (provinces) { return _this.provinces = provinces; }, function (error) { return _this.errorMessage = error; });
    };
    return ProvinceListComponent;
}());
ProvinceListComponent = __decorate([
    core_1.Component({
        selector: 'cs-provinces',
        moduleId: module.id,
        templateUrl: 'province-list.component.html',
    }),
    __metadata("design:paramtypes", [province_service_1.ProvinceService])
], ProvinceListComponent);
exports.ProvinceListComponent = ProvinceListComponent;
//# sourceMappingURL=province-list.component.js.map