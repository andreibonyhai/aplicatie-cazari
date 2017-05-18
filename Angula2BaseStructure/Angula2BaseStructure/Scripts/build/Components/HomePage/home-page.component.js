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
var HomePageComponent = (function () {
    function HomePageComponent(apiService) {
        this.apiService = apiService;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.apiService.get($("#logs-url").text()).then(function (r) { return console.log(r); });
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: "home-page",
            templateUrl: "Scripts/build/Components/HomePage/home-page.template.html",
            directives: [common_1.NgClass, loader_component_1.LoaderComponent]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
