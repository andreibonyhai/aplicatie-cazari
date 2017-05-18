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
var loader_component_1 = require("../Loader/loader.component");
var core_1 = require("@angular/core");
var main_1 = require("ag-grid-ng2/main");
var router_deprecated_1 = require("@angular/router-deprecated");
var common_1 = require("@angular/common");
var api_service_1 = require("../../Infrastructure/Api/api.service");
// only import this if you are using the ag-Grid-Enterprise
//import 'ag-grid-enterprise/main';
var Component2Component = (function () {
    function Component2Component(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    Component2Component.prototype.ngOnInit = function () {
    };
    Component2Component = __decorate([
        core_1.Component({
            selector: "component2",
            templateUrl: "Scripts/build/Components/Component2/component2.template.html",
            directives: [main_1.AgGridNg2, loader_component_1.LoaderComponent, common_1.NgStyle]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_deprecated_1.Router])
    ], Component2Component);
    return Component2Component;
}());
exports.Component2Component = Component2Component;
