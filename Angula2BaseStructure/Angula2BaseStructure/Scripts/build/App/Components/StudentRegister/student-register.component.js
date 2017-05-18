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
var common_1 = require("@angular/common");
var api_service_1 = require("../../Infrastructure/Api/api.service");
var Student_1 = require('../../Entities/Student/Student');
var Address_1 = require('../../Entities/Utils/Address');
// only import this if you are using the ag-Grid-Enterprise
//import 'ag-grid-enterprise/main';
var StudentRegisterComponent = (function () {
    function StudentRegisterComponent(apiService) {
        this.apiService = apiService;
        this.registeringStudent = new Student_1.Student();
    }
    StudentRegisterComponent.prototype.ngOnInit = function () {
        this.registeringStudent = new Student_1.Student();
        this.registeringStudent.address = new Address_1.Address();
        $("#wizard").steps();
    };
    StudentRegisterComponent.prototype.registerStudent = function () {
        var _this = this;
        console.log(this.registeringStudent);
        this.apiService.post($('#student-register-url').text(), this.registeringStudent).then(function (result) {
            console.log("registered student", _this.registeringStudent);
            console.log("req rez", result);
        });
    };
    StudentRegisterComponent = __decorate([
        core_1.Component({
            selector: "student-register",
            templateUrl: "./student-register.template.html",
            directives: [main_1.AgGridNg2, loader_component_1.LoaderComponent, common_1.NgStyle]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], StudentRegisterComponent);
    return StudentRegisterComponent;
}());
exports.StudentRegisterComponent = StudentRegisterComponent;
//# sourceMappingURL=student-register.component.js.map