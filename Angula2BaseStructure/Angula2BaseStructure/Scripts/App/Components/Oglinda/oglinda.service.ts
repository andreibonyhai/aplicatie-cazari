import { Injectable } from '@angular/core';
import {Room} from '../../Entities/Dorm/Room';
import {Dorm} from '../../Entities/Dorm/Dorm';
import {Student} from '../../Entities/Student/Student';
import {ApiService} from "../../Infrastructure/Api/api.service";

@Injectable()
export class OglindaService {
    constructor(private apiService: ApiService) {}

    testDorm(i: number) {
        this.apiService.get<Dorm>($('#dorm-url').text()).then(result => {
            this.dorm = result;
            console.log(result);
        });
    }
    createDorm(i: number) {
        this.apiService.get<Dorm>($("#dorm-url").text() + "/GetDorm?dormId="+i).then(res => {
            console.log(res, "create dorm get");
            this.dorm = res;
        });
    
        return this.dorm;
    }

    dorm: Dorm;
}