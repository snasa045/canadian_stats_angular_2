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
var router_1 = require("@angular/router");
var ProvinceDetailComponent = (function () {
    function ProvinceDetailComponent(_provinceService, _route) {
        this._provinceService = _provinceService;
        this._route = _route;
    }
    ProvinceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this._route.snapshot.params['name'];
        this.pageTitle = "" + name;
        this._provinceService.getProvinces()
            .subscribe(function (provinces) { return _this.provinces = provinces; }, function (error) { return _this.errorMessage = error; });
    };
    return ProvinceDetailComponent;
}());
ProvinceDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/provinces/province-detail.component.html'
    }),
    __metadata("design:paramtypes", [province_service_1.ProvinceService,
        router_1.ActivatedRoute])
], ProvinceDetailComponent);
exports.ProvinceDetailComponent = ProvinceDetailComponent;
//# sourceMappingURL=province-detail.component.js.map