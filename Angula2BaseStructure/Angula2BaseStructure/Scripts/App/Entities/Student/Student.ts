import {SpecialCase} from '../Utils/SpecialCase';
import {Address} from '../Utils/Address';
import {Room} from '../Dorm/Room';
export class Student {
    studentId: number;
    firstName: string;
    lastName: string;
    cnp: string;
    serie: string;
    nrBuletin: string;
    dateofBirth: Date;
    faculty: string;
    specialisation: string;
    year:string;
    address: Address;
    phone: string;
    email: string;
    room: Room;
    specialCase: SpecialCase;

}