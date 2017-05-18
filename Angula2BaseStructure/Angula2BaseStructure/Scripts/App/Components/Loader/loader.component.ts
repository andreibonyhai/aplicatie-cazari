import {Component, Input} from "@angular/core";

@Component({
    selector: "loader",
    templateUrl: "./loader.template.html"
})
export class LoaderComponent {
    @Input()
    message: string;
}