import {LoaderComponent} from "../Loader/loader.component";

import {Component, OnInit} from "@angular/core";
import {AgGridNg2} from "ag-grid-ng2/main";
import {GridOptions, ColDef, ColGroupDef} from "ag-grid/main";

import {SimpleDictionary as Dictionary} from "../../Infrastructure/DataStructures/Dictionary";
import {ObjectMerger} from "../../Infrastructure/Utils/ObjectMerger";
import {Tuple} from "../../Infrastructure/DataStructures/Tuple";

import {OnActivate, Router} from "@angular/router-deprecated";
import {NgStyle} from "@angular/common";

import {ApiService} from "../../Infrastructure/Api/api.service";

import {Dorm} from "../../Entities/Dorm/Dorm";
import {Room} from "../../Entities/Dorm/Room";
import {Student} from "../../Entities/Student/Student";
import {OglindaService} from "./oglinda.service";


@Component({
    selector: "oglinda",
    templateUrl: "./oglinda.template.html",
    directives: [AgGridNg2, LoaderComponent, NgStyle],
    providers: [OglindaService]
})
export class OglindaComponent implements OnInit {
    private gridOptions: GridOptions;

    constructor(private apiService: ApiService, private router: Router, private oglindaService: OglindaService) {
    }

    ngOnInit(): void {
        //this.dorm = this.oglindaService.createDorm(1);
        this.apiService.get<Dorm>($("#dorm-url").text() + "/GetDorm?dormId=" + 1).then(res => {
            console.log(res, "create dorm get");
            this.dorm = res;
            this.populateRooms(this.dorm);

        });
        this.oglindaService.testDorm(7);
        //1->18

    }

    populateRooms(dorm: Dorm) {
        for (var i = 0; i < 14; i++) {
            this.roomsGroundFloor1.push(this.dorm.roomsGroundFloor[i]);
            this.roomsFloor11.push(this.dorm.roomsFloor1[i]);
            this.roomsFloor21.push(this.dorm.roomsFloor2[i]);
            this.roomsFloor31.push(this.dorm.roomsFloor3[i]);
            this.roomsFloor41.push(this.dorm.roomsFloor4[i]);
            this.roomsFloor51.push(this.dorm.roomsFloor5[i]);
        }
        for (var i = 14; i < 28; i++) {
            this.roomsGroundFloor2.push(this.dorm.roomsGroundFloor[i]);
            this.roomsFloor12.push(this.dorm.roomsFloor1[i]);
            this.roomsFloor22.push(this.dorm.roomsFloor2[i]);
            this.roomsFloor32.push(this.dorm.roomsFloor3[i]);
            this.roomsFloor42.push(this.dorm.roomsFloor4[i]);
            this.roomsFloor52.push(this.dorm.roomsFloor5[i]);
        }
        console.log(this.dorm, "component dorm");

        //calculating avaliable/total places
        for (var room of this.dorm.rooms) {
            this.totalBeds = Number(this.totalBeds + room.totalPlaces);
            if (room.avaliablePlaces != -1) {
                this.openBeds = this.openBeds + room.avaliablePlaces;
            }
        }
        this.takenBeds = this.totalBeds - this.openBeds;
        console.log(this.totalBeds, this.openBeds);
    }

    totalBeds: number = 0;
    takenBeds: number = 0;
    openBeds: number = 0;
    dorm: Dorm;
    roomsGroundFloor1 = [];
    roomsGroundFloor2 = [];
    roomsFloor11 = [];
    roomsFloor12 = [];
    roomsFloor21 = [];
    roomsFloor22 = [];
    roomsFloor31 = [];
    roomsFloor32 = [];
    roomsFloor41 = [];
    roomsFloor42 = [];
    roomsFloor51 = [];
    roomsFloor52 = [];

    roomDetails: Room;
    detailsName = "";
    totalPlaces = 0;
    studentsInRoom = new Array<Student>();
    showRoomModal(room: Room) {
        this.detailsName = room.name;
        this.totalPlaces = room.totalPlaces;
        this.studentsInRoom = room.studentsInRoom;

        console.log(room, "show modal");
        this.roomDetails = room;
        ($('#roomModal') as any).modal("show");
    }
}