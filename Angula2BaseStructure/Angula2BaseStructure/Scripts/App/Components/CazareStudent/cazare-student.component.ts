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
    selectedFloor ="";
    floors = ["Parter", 1, 2, 3, 4, 5];
    roomsOnFloor = new Array<Room>();
    ngOnInit() {
            this.apiService.get<Dorm>($("#dorm-url").text() + "/GetDorm?dormId=1").then(res => {
                this.dorm = res;
                console.log("got dorm", this.dorm);
                this.roomsOnFloor = this.dorm.roomsGroundFloor;
            });
    }
    recievedStudent = new Student();
    routerOnActivate(current: any, previous?: any) {
        this.selectedFloor = "Parter";
        this.roomsOnFloor = this.dorm.roomsGroundFloor;
        this.recievedStudent = JSON.parse(current.params["student"]);
        console.log(this.recievedStudent, "params");
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
    oldSelectedRoom = {};
    selectRoom(room: Room) {
        if (this.oldSelectedRoom === {}) {
            this.oldSelectedRoom = room;
        } else {
            this.oldSelectedRoom = this.selectedRoom;
        }
        this.selectedRoom = room;
        console.log(this.oldSelectedRoom, "old");
        var oldBackgroundColor = $("#room" + room.name).css("background-color");
        //set backgrounds
        //$("#room" + this.oldSelectedRoom.name).css("border", oldBackgroundColor);
        $("#room" + room.name).css("background-color", "#45d5f9");
        console.log(room, "selected room");

    }
    cazeazaStudent(room: Room,student: Student) {
        var updatedRoom = room;
        console.log(student, room, "enter req");
        room.studentsInRoom = new Array<Student>();
        room.studentsInRoom.push(student);
        var params = { dormId: this.dorm.dormId, roomId: room.roomId, studentId: student.studentId }
        console.log(params);
        this.router.navigate(["/FinalizareCazare", { student: JSON.stringify(this.recievedStudent) }]);

        this.apiService.post($("#dorm-url").text() + "/CazeazaStudent",params).then(res => {
            console.log(params, "cazat");
        });
       

    }
}