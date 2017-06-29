import {LoaderComponent} from "../Loader/loader.component";

import {Component, OnInit} from "@angular/core";
import {AgGridNg2} from "ag-grid-ng2/main";
import {GridOptions, ColDef, ColGroupDef} from "ag-grid/main";

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";


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
    selector: "cautare-student",
    templateUrl: "./cautare-student.template.html",
    directives: [LoaderComponent]
})
export class CautareStudentComponent implements OnInit {
    allStudents: Array<Student> = new Array<Student>();
    studentSearchValue = "";
    returnedStudents: Array<Student> = new Array<Student>();
    constructor(private apiService: ApiService, private router: Router) {
    }

    ngOnInit() {
        this.apiService.get<Array<Student>>($("#cazare-student-url").text()).then(result => {
            this.allStudents = result;
            this.returnedStudents = this.allStudents;
            this.searchStudent("");
            console.log(this.allStudents, "allstudents");

        });
    }
    searchStudent(input: string) {
        this.returnedStudents = new Array<Student>();
        for (var student of this.allStudents) {
            if (student.firstName.toLowerCase().startsWith(input.toLowerCase()) || student.lastName.toLowerCase().startsWith(input.toLowerCase())) {
                this.returnedStudents.push(student);
                console.log("found", student);
            }
        }
        setTimeout(($(".footable") as any).footable(), 500);
    }

    goToCazare(student: Student) {
        console.log(student);
        this.router.navigate(["/CazareStudent", { student: JSON.stringify(student) }]);
    }

}
