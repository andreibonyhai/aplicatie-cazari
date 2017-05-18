import {Component, OnInit} from "@angular/core";
import {NgClass} from "@angular/common";
import {OnActivate, ComponentInstruction} from "@angular/router-deprecated";

import {SimpleDictionary} from "../../Infrastructure/DataStructures/Dictionary";
import {Tuple} from "../../Infrastructure/DataStructures/Tuple";

import {LoaderComponent} from "../Loader/loader.component";

import {ApiService} from "../../Infrastructure/Api/api.service";

@Component({
    selector: "home-page",
    templateUrl: "./home-page.template.html",
    directives: [NgClass, LoaderComponent]
})
export class HomePageComponent implements OnInit {
    private logs: string;
    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.get($("#logs-url").text()).then(r => console.log(r));
    }
}