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
var CautareStudentComponent = (function () {
    function CautareStudentComponent(apiService) {
        this.apiService = apiService;
        this.allStudents = new Array();
        this.studentSearchValue = "";
        this.returnedStudents = new Array();
    }
    CautareStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.get($("#cazare-student-url").text()).then(function (result) {
            _this.allStudents = result;
            console.log(_this.allStudents, "allstudents");
        });
    };
    CautareStudentComponent.prototype.searchStudent = function (input) {
        this.returnedStudents = this.allStudents;
    };
    CautareStudentComponent = __decorate([
        core_1.Component({
            selector: "cautare-student",
            templateUrl: "./cautare-student.template.html",
            directives: [loader_component_1.LoaderComponent]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], CautareStudentComponent);
    return CautareStudentComponent;
}());
exports.CautareStudentComponent = CautareStudentComponent;
//# sourceMappingURL=cautare-student.compontent.js.map