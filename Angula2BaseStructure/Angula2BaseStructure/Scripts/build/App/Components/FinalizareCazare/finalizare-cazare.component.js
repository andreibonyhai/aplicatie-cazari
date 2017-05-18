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
var api_service_1 = require("../../Infrastructure/Api/api.service");
var Student_1 = require("../../Entities/Student/Student");
var SpecialCase_1 = require("../../Entities/Utils/SpecialCase");
var FinalizareCazareComponent = (function () {
    function FinalizareCazareComponent(apiService) {
        this.apiService = apiService;
        this.selectedSpecialCase = new SpecialCase_1.SpecialCase();
        this.specialCases = new Array();
        this.recievedStudent = new Student_1.Student();
    }
    FinalizareCazareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.get($("#cazare-url").text() + "/GetSpecialCases").then(function (res) {
            _this.specialCases = res;
            console.log(res);
            _this.selectedSpecialCase = _this.specialCases[0];
            console.log(_this.selectedSpecialCase);
            console.log(_this.selectedSpecialCase.discount.value);
        });
    };
    FinalizareCazareComponent.prototype.routerOnActivate = function (current, previous) {
        this.recievedStudent = JSON.parse(current.params["student"]);
        console.log(this.recievedStudent, "params");
    };
    FinalizareCazareComponent.prototype.selectSpecialCase = function (event) {
    };
    FinalizareCazareComponent.prototype.addSpecialCase = function (specialCase) {
        var par = { studentId: this.recievedStudent.studentId, specialCaseId: specialCase.specialCaseId };
        this.apiService.post($("#dorm-url").text() + "/SetSpecialCase", par).then(function (res) {
            console.log(par, "added case");
        });
    };
    FinalizareCazareComponent = __decorate([
        core_1.Component({
            selector: "finalizare-cazare",
            templateUrl: "./finalizare-cazare.template.html",
            directives: [loader_component_1.LoaderComponent]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], FinalizareCazareComponent);
    return FinalizareCazareComponent;
}());
exports.FinalizareCazareComponent = FinalizareCazareComponent;
//# sourceMappingURL=finalizare-cazare.component.js.map