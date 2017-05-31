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
import {SpecialCase} from "../../Entities/Utils/SpecialCase";


@Component({
    selector: "cazare-student",
    templateUrl: "./cazare-student.template.html",
    directives: [LoaderComponent]
})
export class CazareStudentComponent implements OnInit {
    allStudents: Array<Student> = new Array<Student>();
    constructor(private apiService: ApiService, private router: Router) {
    }
    specialCases = new Array<SpecialCase>();
    dorm = new Dorm();
    selectedFloor = "";
    floors = ["Parter", 1, 2, 3, 4, 5];
    roomsOnFloor = new Array<Room>();
    ngOnInit() {
        this.apiService.get<Dorm>($("#dorm-url").text() + "/GetDorm?dormId=1").then(res => {
            this.dorm = res;
            this.roomsOnFloor = this.dorm.roomsGroundFloor;
            console.log(this.roomsOnFloor, "on init rooms on floor");
            this.selectedRoom = this.roomsOnFloor[0];
            console.log(this.selectedRoom, "on init selected room");
            this.oldSelectedRoom = this.roomsOnFloor[0];
            console.log(this.oldSelectedRoom, "on init old room");
            this.selectRoom(this.roomsOnFloor[0]);
        });
    }
    recievedStudent = new Student();
    routerOnActivate(current: any, previous?: any) {
        this.selectedFloor = "Parter";
        this.recievedStudent = JSON.parse(current.params["student"]);
        //this.selectedRoom = this.dorm.roomsGroundFloor[0];


    }


    selectFloor(event: Event) {
        if (this.selectedFloor === "Parter") this.roomsOnFloor = this.dorm.roomsGroundFloor;
        if (Number(this.selectedFloor) === 1) this.roomsOnFloor = this.dorm.roomsFloor1;
        if (Number(this.selectedFloor) === 2) this.roomsOnFloor = this.dorm.roomsFloor2;
        if (Number(this.selectedFloor) === 3) this.roomsOnFloor = this.dorm.roomsFloor3;
        if (Number(this.selectedFloor) === 4) this.roomsOnFloor = this.dorm.roomsFloor4;
        if (Number(this.selectedFloor) === 5) this.roomsOnFloor = this.dorm.roomsFloor5;
        this.roomsOnFloor[4].avaliablePlaces = 1;
    }
    selectedRoom = new Room();
    oldSelectedRoom = new Room();
    oldBackgroundColor = "";
    selectRoom(room: Room) {
        this.oldSelectedRoom = this.selectedRoom;
        this.oldBackgroundColor = $("#room" + room.name).css("background-color");
        this.selectedRoom = room;
        $("#room" + this.selectedRoom.name).css("background-color", "rgb(69, 213, 249)");
        this.deselectRoom(this.oldSelectedRoom);
    }
    deselectRoom(room: Room) {
        this.oldSelectedRoom = room;
        $("#room" + room.name).css("background-color", this.oldBackgroundColor);
    }

    cazeazaStudent(room: Room, student: Student) {
        var updatedRoom = room;
        room.studentsInRoom = new Array<Student>();
        room.studentsInRoom.push(student);
        var params = { dormId: this.dorm.dormId, roomId: room.roomId, studentId: student.studentId }
        this.router.navigate(["/FinalizareCazare", { student: JSON.stringify(this.recievedStudent) }]);

        this.apiService.post($("#dorm-url").text() + "/CazeazaStudent",params).then(res => {
            console.log(params, "cazat");
        });


    }

    showStudentModal() {
        ($('#studentModal') as any).modal("show");
    }

    adaugaDate() {
        this.apiService.put($("#student-register-url").text(), this.recievedStudent).then();
    }
}