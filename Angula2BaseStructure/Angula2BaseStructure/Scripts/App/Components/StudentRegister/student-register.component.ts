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

import {Student} from '../../Entities/Student/Student';
import {Address} from '../../Entities/Utils/Address';



// only import this if you are using the ag-Grid-Enterprise
//import 'ag-grid-enterprise/main';

@Component({
    selector: "student-register",
    templateUrl: "./student-register.template.html",
    directives: [AgGridNg2, LoaderComponent, NgStyle]
})
export class StudentRegisterComponent implements OnInit {

    constructor(private apiService: ApiService){}
    ngOnInit() {
        this.registeringStudent = new Student();
        this.registeringStudent.address = new Address();
        ($("#wizard") as any).steps();
    }
    registeringStudent: Student = new Student();

    registerStudent() {
        console.log(this.registeringStudent);
        this.apiService.post<Student>($('#student-register-url').text(), this.registeringStudent).then(result => {
            console.log("registered student", this.registeringStudent);
            console.log("req rez", result);
        });
    }
    files=[];
    onFileInputChange(event: Event) {
        this.files = (event.target as any).files;
        console.log(this.files, "files");
    }

    confirmFiles() {
        var params = {folder:"C:/AAA", fileName:"asd.jpg", stream : this.files }
        this.apiService.post($("#student-register-url").text() + "/SaveToDisk", null);

    }
}