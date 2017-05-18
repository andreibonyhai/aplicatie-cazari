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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var loader_component_1 = require("../Loader/loader.component");
var api_service_1 = require("../../Infrastructure/Api/api.service");
var Component1Component = (function () {
    function Component1Component(apiService) {
        this.apiService = apiService;
    }
    Component1Component.prototype.ngOnInit = function () {
        this.apiService.get($("#logs-url").text()).then(function (r) { return console.log(r); });
    };
    Component1Component = __decorate([
        core_1.Component({
            selector: "component1",
            templateUrl: "Scripts/build/Components/Component1/component1.template.html",
            directives: [common_1.NgClass, loader_component_1.LoaderComponent]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], Component1Component);
    return Component1Component;
}());
exports.Component1Component = Component1Component;
