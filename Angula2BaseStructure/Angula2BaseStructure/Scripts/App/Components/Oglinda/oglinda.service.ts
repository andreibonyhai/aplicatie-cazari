import { Injectable } from '@angular/core';
import {Room} from '../../Entities/Dorm/Room';
import {Dorm} from '../../Entities/Dorm/Dorm';
import {Student} from '../../Entities/Student/Student';
import {ApiService} from "../../Infrastructure/Api/api.service";

@Injectable()
export class OglindaService {
    constructor(private apiService: ApiService) {}

    testDorm(i: number) {
        this.apiService.get<Array<Dorm>>($('#dorm-url').text()).then(result => {
            console.log(result);
        });
    }
    createDorm(i: number) {
        this.dorm = new Dorm();
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
    }

    dorm: Dorm;

    seedGroundFloor() {
        this.dorm.roomsGroundFloor = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room();
            if ((i !== 11) && (i !== 12) && (i !== 13) && (i !== 14)) {
                room.roomId = i;
                room.name = i.toString();
                if ((i !== 30)) {
                    room.totalPlaces = 4;
                    room.avaliablePlaces = room.totalPlaces;
                }
                else {
                    room.totalPlaces = 2; room.avaliablePlaces = room.totalPlaces;
                }
                if ((i == 15)  || (i == 16)) {
                    room.totalPlaces = 0;
                    room.avaliablePlaces = room.totalPlaces -1 ;
                }
                room.studentsInRoom = [];
                if ((room.roomId !== 11) && (room.roomId !== 12) && (room.roomId !== 13) && (room.roomId !== 14)) {
                    this.dorm.roomsGroundFloor.push(room);

                }
            }
        }
    }

    seedFloor1() {
        this.dorm.roomsFloor1 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room();

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
                    room.totalPlaces = 4; room.avaliablePlaces = room.totalPlaces; }
                else {
                    room.totalPlaces = 2;
                    room.avaliablePlaces = room.totalPlaces;
                }
                if ((i == 1) || (i == 2) || (i==9)) {
                    room.totalPlaces = 0;
                    room.avaliablePlaces = room.totalPlaces -1 ;
                }
                room.studentsInRoom = [];
                if ((room.roomId != 111) && (room.roomId != 112) && (room.roomId !=113) && (room.roomId != 114)) {
                    this.dorm.roomsFloor1.push(room);

                }
            }
        }
    }

    seedFloor2() {
        this.dorm.roomsFloor2 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room();
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
                    room.totalPlaces = 4; room.avaliablePlaces = room.totalPlaces; }
                else {
                    room.totalPlaces = 2;
                    room.avaliablePlaces = room.totalPlaces;
                }
            
                if ((room.roomId != 211) && (room.roomId != 212) && (room.roomId != 213) && (room.roomId != 214)) {
                    this.dorm.roomsFloor2.push(room);
                }
            }

        }
    }

    seedFloor3() {
        this.dorm.roomsFloor3 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room();
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
                    room.totalPlaces = 4; room.avaliablePlaces = room.totalPlaces; }
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
    }

    seedFloor4() {
        this.dorm.roomsFloor4 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room();
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
                    room.totalPlaces = 4; room.avaliablePlaces = room.totalPlaces; }
                else {
                    room.totalPlaces = 2; room.avaliablePlaces = room.totalPlaces;
                }
                room.studentsInRoom = [];
                if ((room.roomId != 411) && (room.roomId != 412) && (room.roomId != 413) && (room.roomId != 414)) {
                    this.dorm.roomsFloor4.push(room);

                }
            }

        }
    }

    seedFloor5() {
        this.dorm.roomsFloor5 = [];
        for (var i = 0; i < 33; i++) {
            var room = new Room();
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
                    room.totalPlaces = 4; room.avaliablePlaces = room.totalPlaces; }
                else {
                    room.totalPlaces = 2; room.avaliablePlaces = room.totalPlaces;
                }
                room.studentsInRoom = [];
                if ((room.roomId != 411) && (room.roomId != 412) && (room.roomId != 413) && (room.roomId != 414)) {
                    this.dorm.roomsFloor5.push(room);
                }

            }

        }
    }
}