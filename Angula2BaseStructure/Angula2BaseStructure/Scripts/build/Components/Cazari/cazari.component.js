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
var cazari_service_1 = require("./cazari.service");
var CazariComponent = (function () {
    function CazariComponent(apiService, router, cazariService) {
        this.apiService = apiService;
        this.router = router;
        this.cazariService = cazariService;
        this.totalBeds = 0;
        this.takenBeds = 0;
        this.openBeds = 0;
        this.roomsGroundFloor1 = [];
        this.roomsGroundFloor2 = [];
        this.roomsFloor11 = [];
        this.roomsFloor12 = [];
        this.roomsFloor21 = [];
        this.roomsFloor22 = [];
        this.roomsFloor31 = [];
        this.roomsFloor32 = [];
        this.roomsFloor41 = [];
        this.roomsFloor42 = [];
        this.roomsFloor51 = [];
        this.roomsFloor52 = [];
        this.detailsName = "";
        this.totalPlaces = 0;
        this.studentsInRoom = new Array();
    }
    CazariComponent.prototype.ngOnInit = function () {
        this.dorm = this.cazariService.createDorm(7);
        this.cazariService.testDorm(7);
        //1->18
        for (var i = 1; i < 15; i++) {
            this.roomsGroundFloor1.push(this.dorm.roomsGroundFloor[i]);
            this.roomsFloor11.push(this.dorm.roomsFloor1[i]);
            this.roomsFloor21.push(this.dorm.roomsFloor2[i]);
            this.roomsFloor31.push(this.dorm.roomsFloor3[i]);
            this.roomsFloor41.push(this.dorm.roomsFloor4[i]);
            this.roomsFloor51.push(this.dorm.roomsFloor5[i]);
        }
        for (var i = 15; i < 29; i++) {
            this.roomsGroundFloor2.push(this.dorm.roomsGroundFloor[i]);
            this.roomsFloor12.push(this.dorm.roomsFloor1[i]);
            this.roomsFloor22.push(this.dorm.roomsFloor2[i]);
            this.roomsFloor32.push(this.dorm.roomsFloor3[i]);
            this.roomsFloor42.push(this.dorm.roomsFloor4[i]);
            this.roomsFloor52.push(this.dorm.roomsFloor5[i]);
        }
        this.roomsGroundFloor1[1].avaliablePlaces = 0;
        this.roomsGroundFloor1[2].avaliablePlaces = 2;
        this.roomsGroundFloor1[3].avaliablePlaces = 3;
        this.roomsGroundFloor1[4].avaliablePlaces = 1;
        this.roomsGroundFloor1[5].avaliablePlaces = 3;
        console.log(this.dorm, "component dorm");
        //calculating avaliable/total places
        for (var _i = 0, _a = this.dorm.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            this.totalBeds = Number(this.totalBeds + room.totalPlaces);
            if (room.avaliablePlaces != -1) {
                this.openBeds = this.openBeds + room.avaliablePlaces;
            }
        }
        this.takenBeds = this.totalBeds - this.openBeds;
        console.log(this.totalBeds, this.openBeds);
    };
    CazariComponent.prototype.seedDorm = function () {
    };
    CazariComponent.prototype.showRoomModal = function (room) {
        this.detailsName = room.name;
        this.totalPlaces = room.totalPlaces;
        this.studentsInRoom = room.studentsInRoom;
        console.log(room, "show modal");
        this.roomDetails = room;
        $('#roomModal').modal("show");
    };
    CazariComponent = __decorate([
        core_1.Component({
            selector: "cazari",
            templateUrl: "Scripts/build/Components/Cazari/cazari.template.html",
            directives: [main_1.AgGridNg2, loader_component_1.LoaderComponent, common_1.NgStyle],
            providers: [cazari_service_1.CazariService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_deprecated_1.Router, cazari_service_1.CazariService])
    ], CazariComponent);
    return CazariComponent;
}());
exports.CazariComponent = CazariComponent;
