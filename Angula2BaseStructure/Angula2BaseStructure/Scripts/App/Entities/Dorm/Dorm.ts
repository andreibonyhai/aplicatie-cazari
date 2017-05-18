import {Room} from './Room';
export class Dorm {
    dormId: number;
    name: string;
    rooms: Array<Room>;
    roomsGroundFloor: Array<Room>;
    roomsFloor1: Array<Room>;
    roomsFloor2: Array<Room>;
    roomsFloor3: Array<Room>;
    roomsFloor4: Array<Room>;
    roomsFloor5: Array<Room>;
    restrictedRoomNames = [];


}