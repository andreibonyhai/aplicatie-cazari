import {Student} from '../Student/Student';
export class Room {
    roomId: number;
    name: string;
    totalPlaces: number;
    avaliablePlaces: number;
    studentsInRoom: Array<Student>;

    constructor() {
        this.studentsInRoom = new Array<Student>();
    }
}