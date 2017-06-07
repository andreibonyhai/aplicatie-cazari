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
    selector: "finalizare-cazare",
    templateUrl: "./finalizare-cazare.template.html",
    directives: [LoaderComponent]
})
export class FinalizareCazareComponent implements OnInit {
    constructor(private apiService: ApiService) {}


    selectedSpecialCase = new SpecialCase();
    specialCases = new Array<SpecialCase>();
    recievedStudent = new Student();
    ngOnInit() {
        this.apiService.get<Array<SpecialCase>>($("#cazare-url").text() + "/GetSpecialCases").then(res => {
            this.specialCases = res;
            console.log(res);
            this.selectedSpecialCase = this.specialCases[0];
            console.log(this.selectedSpecialCase);
            console.log(this.selectedSpecialCase.discount.value);
        });
    }

    routerOnActivate(current: any, previous?: any) {
        this.recievedStudent = JSON.parse(current.params["student"]);
        console.log(this.recievedStudent, "params");
  
    }


    selectSpecialCase(event: Event) {
        
    }

    addSpecialCase(specialCase: SpecialCase) {
        var par = { studentId: this.recievedStudent.studentId, specialCaseId: specialCase.specialCaseId }
        this.apiService.post($("#dorm-url").text() + "/SetSpecialCase", par).then(res => {
            console.log(par, "added case");
        });
    }

    generateContract() {
        this.apiService.post($("#cazare-student-url").text(), this.recievedStudent.studentId)
            .then(res => {
                console.log("am cazat");
            });
    }
}
