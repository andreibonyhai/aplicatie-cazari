import {LoaderComponent} from "../Loader/loader.component";
import {Component, OnInit} from "@angular/core";

import {SimpleDictionary as Dictionary} from "../../Infrastructure/DataStructures/Dictionary";
import {ObjectMerger} from "../../Infrastructure/Utils/ObjectMerger";
import {Tuple} from "../../Infrastructure/DataStructures/Tuple";

import {OnActivate, Router} from "@angular/router-deprecated";
import {NgStyle} from "@angular/common";

import {ApiService} from "../../Infrastructure/Api/api.service";

import {Student} from "../../Entities/Student/Student";
import {SpecialCase} from "../../Entities/Utils/SpecialCase";


@Component({
    selector: "students-upload",
    templateUrl: "./students-upload.template.html",
    directives: [LoaderComponent]
})
export class StudentsUploadComponent implements OnInit {
    constructor(private apiService: ApiService) { }

    ngOnInit() {}
}
