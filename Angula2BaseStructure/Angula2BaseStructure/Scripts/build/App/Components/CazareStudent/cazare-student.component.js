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
var Dorm_1 = require("../../Entities/Dorm/Dorm");
var Room_1 = require("../../Entities/Dorm/Room");
var Student_1 = require("../../Entities/Student/Student");
var CazareStudentComponent = (function () {
    function CazareStudentComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.allStudents = new Array();
        this.specialCases = new Array();
        this.dorm = new Dorm_1.Dorm();
        this.selectedFloor = "";
        this.floors = ["Parter", 1, 2, 3, 4, 5];
        this.roomsOnFloor = new Array();
        this.recievedStudent = new Student_1.Student();
        this.selectedRoom = new Room_1.Room();
        this.oldSelectedRoom = new Room_1.Room();
        this.oldBackgroundColor = "";
    }
    CazareStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.get($("#dorm-url").text() + "/GetDorm?dormId=1").then(function (res) {
            _this.dorm = res;
            _this.roomsOnFloor = _this.dorm.roomsGroundFloor;
            console.log(_this.roomsOnFloor, "on init rooms on floor");
            _this.selectedRoom = _this.roomsOnFloor[0];
            console.log(_this.selectedRoom, "on init selected room");
            _this.oldSelectedRoom = _this.roomsOnFloor[0];
            console.log(_this.oldSelectedRoom, "on init old room");
            _this.selectRoom(_this.roomsOnFloor[0]);
        });
    };
    CazareStudentComponent.prototype.routerOnActivate = function (current, previous) {
        this.selectedFloor = "Parter";
        this.recievedStudent = JSON.parse(current.params["student"]);
        //this.selectedRoom = this.dorm.roomsGroundFloor[0];
    };
    CazareStudentComponent.prototype.selectFloor = function (event) {
        if (this.selectedFloor === "Parter")
            this.roomsOnFloor = this.dorm.roomsGroundFloor;
        if (Number(this.selectedFloor) === 1)
            this.roomsOnFloor = this.dorm.roomsFloor1;
        if (Number(this.selectedFloor) === 2)
            this.roomsOnFloor = this.dorm.roomsFloor2;
        if (Number(this.selectedFloor) === 3)
            this.roomsOnFloor = this.dorm.roomsFloor3;
        if (Number(this.selectedFloor) === 4)
            this.roomsOnFloor = this.dorm.roomsFloor4;
        if (Number(this.selectedFloor) === 5)
            this.roomsOnFloor = this.dorm.roomsFloor5;
        this.roomsOnFloor[4].avaliablePlaces = 1;
    };
    CazareStudentComponent.prototype.selectRoom = function (room) {
        this.oldSelectedRoom = this.selectedRoom;
        this.oldBackgroundColor = $("#room" + room.name).css("background-color");
        this.selectedRoom = room;
        $("#room" + this.selectedRoom.name).css("background-color", "rgb(69, 213, 249)");
        this.deselectRoom(this.oldSelectedRoom);
    };
    CazareStudentComponent.prototype.deselectRoom = function (room) {
        this.oldSelectedRoom = room;
        $("#room" + room.name).css("background-color", this.oldBackgroundColor);
    };
    CazareStudentComponent.prototype.cazeazaStudent = function (room, student) {
        var updatedRoom = room;
        room.studentsInRoom = new Array();
        room.studentsInRoom.push(student);
        var params = { dormId: this.dorm.dormId, roomId: room.roomId, studentId: student.studentId };
        this.router.navigate(["/FinalizareCazare", { student: JSON.stringify(this.recievedStudent) }]);
        this.apiService.post($("#dorm-url").text() + "/CazeazaStudent", params).then(function (res) {
            console.log(params, "cazat");
        });
    };
    CazareStudentComponent.prototype.showStudentModal = function () {
        $('#studentModal').modal("show");
    };
    CazareStudentComponent.prototype.adaugaDate = function () {
        this.apiService.put($("#student-register-url").text(), this.recievedStudent).then();
    };
    CazareStudentComponent = __decorate([
        core_1.Component({
            selector: "cazare-student",
            templateUrl: "./cazare-student.template.html",
            directives: [loader_component_1.LoaderComponent]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_deprecated_1.Router])
    ], CazareStudentComponent);
    return CazareStudentComponent;
}());
exports.CazareStudentComponent = CazareStudentComponent;
//# sourceMappingURL=cazare-student.component.js.map