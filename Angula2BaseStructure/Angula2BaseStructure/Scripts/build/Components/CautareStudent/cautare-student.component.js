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
var router_deprecated_1 = require("@angular/router-deprecated");
var api_service_1 = require("../../Infrastructure/Api/api.service");
var CautareStudentComponent = (function () {
    function CautareStudentComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.allStudents = new Array();
        this.studentSearchValue = "";
        this.returnedStudents = new Array();
    }
    CautareStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.get($("#cazare-student-url").text()).then(function (result) {
            _this.allStudents = result;
            _this.returnedStudents = _this.allStudents;
            _this.searchStudent("");
            console.log(_this.allStudents, "allstudents");
        });
    };
    CautareStudentComponent.prototype.searchStudent = function (input) {
        this.returnedStudents = new Array();
        for (var _i = 0, _a = this.allStudents; _i < _a.length; _i++) {
            var student = _a[_i];
            if (student.firstName.toLowerCase().startsWith(input.toLowerCase()) || student.lastName.toLowerCase().startsWith(input.toLowerCase())) {
                this.returnedStudents.push(student);
                console.log("found", student);
            }
        }
        setTimeout($(".footable").footable(), 500);
    };
    CautareStudentComponent.prototype.goToCazare = function (student) {
        console.log(student);
        this.router.navigate(["/CazareStudent", { student: JSON.stringify(student) }]);
    };
    CautareStudentComponent = __decorate([
        core_1.Component({
            selector: "cautare-student",
            templateUrl: "Scripts/build/Components/CautareStudent/cautare-student.template.html",
            directives: [loader_component_1.LoaderComponent]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_deprecated_1.Router])
    ], CautareStudentComponent);
    return CautareStudentComponent;
}());
exports.CautareStudentComponent = CautareStudentComponent;
