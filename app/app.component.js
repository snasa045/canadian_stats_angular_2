"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { ProvinceDetailService } from './provinces/province-detail.service';
var province_service_1 = require("./provinces/province.service");
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Canadian Stats";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'cs-app',
        template: "\n   \n <div>\n        <nav class='container-fluid navbar navbar-default row'>\n            <div class=\"row\">\n\n            <div class=\"col-md-2 col-sm-2\">\n\n            </div>\n            <div class=\"col-md-5 col-sm-5\">\n            <h1>{{pageTitle}}</h1>\n            \n            </div>             \n            <div class=\"col-md-5 col-sm-5\">\n            </div>             \n            \n            </div>\n            \n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n\n    ",
        providers: [province_service_1.ProvinceService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map