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
var core_1 = require('@angular/core');
var Room_1 = require('../../Entities/Dorm/Room');
var Dorm_1 = require('../../Entities/Dorm/Dorm');
var api_service_1 = require("../../Infrastructure/Api/api.service");
var OglindaService = (function () {
    function OglindaService(apiService) {
        this.apiService = apiService;
    }
    OglindaService.prototype.testDorm = function (i) {
        this.apiService.get($('#dorm-url').text()).then(function (result) {
            console.log(result);
        });
    };
    OglindaService.prototype.createDorm = function (i) {
        this.dorm = new Dorm_1.Dorm();
        this.dorm.name = "Camin " + i;
        this.dorm.dormId = i;
        this.seedGroundFloor();
        this.seedFloor1();
        this.seedFloor2();
        this.seedFloor3();
        this.seedFloor4();
        this.seedFloor5();
        this.dorm.rooms = this.dorm.roomsGroundFloor.concat(this.dorm.roomsFloor1).concat(this.dorm.roomsFloor2).concat(this.dorm.roomsFloor3).concat(this.dorm.roomsFloor4).concat(this.dorm.roomsFloor5);
        console.log("service created dorm", this.dorm);
        this.dorm.restrictedRoomNames = [15, 16, 101, 102, 109];
        return this.dorm;
    };
    OglindaService.prototype.seedGroundFloor = function () {
        this.dorm.roomsGroundFloor = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room_1.Room();
            if ((i !== 11) && (i !== 12) && (i !== 13) && (i !== 14)) {
                room.roomId = i;
                room.name = i.toString();
                if ((i !== 30)) {
                    room.totalPlaces = 4;
                    room.avaliablePlaces = room.totalPlaces;
                }
                else {
                    room.totalPlaces = 2;
                    room.avaliablePlaces = room.totalPlaces;
                }
                if ((i == 15) || (i == 16)) {
                    room.totalPlaces = 0;
                    room.avaliablePlaces = room.totalPlaces - 1;
                }
                room.studentsInRoom = [];
                if ((room.roomId !== 11) && (room.roomId !== 12) && (room.roomId !== 13) && (room.roomId !== 14)) {
                    this.dorm.roomsGroundFloor.push(room);
                }
            }
        }
    };
    OglindaService.prototype.seedFloor1 = function () {
        this.dorm.roomsFloor1 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room_1.Room();
            if ((i != 11) && (i != 12) && (i != 13) && (i != 14)) {
                if (i < 10) {
                    room.roomId = Number("10" + i);
                    room.name = "10" + i;
                }
                else {
                    room.roomId = Number("1" + i);
                    room.name = "1" + i;
                }
                if ((i != 15) && (i != 16) && (i != 30)) {
                    room.totalPlaces = 4;
                    room.avaliablePlaces = room.totalPlaces;
                }
                else {
                    room.totalPlaces = 2;
                    room.avaliablePlaces = room.totalPlaces;
                }
                if ((i == 1) || (i == 2) || (i == 9)) {
                    room.totalPlaces = 0;
                    room.avaliablePlaces = room.totalPlaces - 1;
                }
                room.studentsInRoom = [];
                if ((room.roomId != 111) && (room.roomId != 112) && (room.roomId != 113) && (room.roomId != 114)) {
                    this.dorm.roomsFloor1.push(room);
                }
            }
        }
    };
    OglindaService.prototype.seedFloor2 = function () {
        this.dorm.roomsFloor2 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room_1.Room();
            if ((i != 11) && (i != 12) && (i != 13) && (i != 14)) {
                if (i < 10) {
                    room.roomId = Number("20" + i);
                    room.name = "20" + i;
                }
                else {
                    room.roomId = Number("2" + i);
                    room.name = "2" + i;
                }
                if ((i != 15) && (i != 16) && (i != 30)) {
                    room.totalPlaces = 4;
                    room.avaliablePlaces = room.totalPlaces;
                }
                else {
                    room.totalPlaces = 2;
                    room.avaliablePlaces = room.totalPlaces;
                }
                if ((room.roomId != 211) && (room.roomId != 212) && (room.roomId != 213) && (room.roomId != 214)) {
                    this.dorm.roomsFloor2.push(room);
                }
            }
        }
    };
    OglindaService.prototype.seedFloor3 = function () {
        this.dorm.roomsFloor3 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room_1.Room();
            if ((i != 11) && (i != 12) && (i != 13) && (i != 14)) {
                if (i < 10) {
                    room.roomId = Number("30" + i);
                    room.name = "30" + i;
                }
                else {
                    room.roomId = Number("3" + i);
                    room.name = "3" + i;
                }
                if ((i != 15) && (i != 16) && (i != 30)) {
                    room.totalPlaces = 4;
                    room.avaliablePlaces = room.totalPlaces;
                }
                else {
                    room.totalPlaces = 2;
                    room.avaliablePlaces = room.totalPlaces;
                }
                room.studentsInRoom = [];
                if ((room.roomId != 311) && (room.roomId != 312) && (room.roomId != 313) && (room.roomId != 314)) {
                    this.dorm.roomsFloor3.push(room);
                }
            }
        }
    };
    OglindaService.prototype.seedFloor4 = function () {
        this.dorm.roomsFloor4 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room_1.Room();
            if ((i != 11) && (i != 12) && (i != 13) && (i != 14)) {
                if (i < 10) {
                    room.roomId = Number("40" + i);
                    room.name = "40" + i;
                }
                else {
                    room.roomId = Number("4" + i);
                    room.name = "4" + i;
                }
                if ((i != 15) && (i != 16) && (i != 30)) {
                    room.totalPlaces = 4;
                    room.avaliablePlaces = room.totalPlaces;
                }
                else {
                    room.totalPlaces = 2;
                    room.avaliablePlaces = room.totalPlaces;
                }
                room.studentsInRoom = [];
                if ((room.roomId != 411) && (room.roomId != 412) && (room.roomId != 413) && (room.roomId != 414)) {
                    this.dorm.roomsFloor4.push(room);
                }
            }
        }
    };
    OglindaService.prototype.seedFloor5 = function () {
        this.dorm.roomsFloor5 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room_1.Room();
            if ((i != 11) && (i != 12) && (i != 13) && (i != 14)) {
                if (i < 10) {
                    room.roomId = Number("50" + i);
                    room.name = "50" + i;
                }
                else {
                    room.roomId = Number("5" + i);
                    room.name = "5" + i;
                }
                if ((i != 15) && (i != 16) && (i != 30)) {
                    room.totalPlaces = 4;
                    room.avaliablePlaces = room.totalPlaces;
                }
                else {
                    room.totalPlaces = 2;
                    room.avaliablePlaces = room.totalPlaces;
                }
                room.studentsInRoom = [];
                if ((room.roomId != 411) && (room.roomId != 412) && (room.roomId != 413) && (room.roomId != 414)) {
                    this.dorm.roomsFloor5.push(room);
                }
            }
        }
    };
    OglindaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], OglindaService);
    return OglindaService;
}());
exports.OglindaService = OglindaService;
//# sourceMappingURL=oglinda.service.js.map