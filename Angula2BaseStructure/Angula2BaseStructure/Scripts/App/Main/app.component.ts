import {Component, OnInit, AfterViewInit} from "@angular/core";
import {provide} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from "@angular/router-deprecated";
import {AuthRouter} from "../Infrastructure/Navigation/AuthRouter";
import {ApiService} from "../Infrastructure/Api/api.service";
import {CustomHttpService} from "../Infrastructure/Http/custom-http.service";
import {CacheService} from "../Infrastructure/Caching/cache.service";
import {StorageService} from "../Infrastructure/Storage/storage.service";
import {AuthService} from "../Infrastructure/Auth/auth.service";

import {HomePageComponent} from "../Components/HomePage/home-page.component";
import {OglindaComponent} from "../Components/Oglinda/oglinda.component";
import {LoginComponent} from "../Components/Auth/login.component";
import {RegisterComponent} from "../Components/Auth/register.component";
import {StudentRegisterComponent} from "../Components/StudentRegister/student-register.component";
import {CazareStudentComponent} from "../Components/CazareStudent/cazare-student.component";
import {CautareStudentComponent} from "../Components/CautareStudent/cautare-student.component";
import {FinalizareCazareComponent} from "../Components/FinalizareCazare/finalizare-cazare.component";
import {StudentsUploadComponent} from "../Components/StudentsUpload/students-upload.component";

import {User} from "../Entities/User";

@RouteConfig([
    { path: "/oglinda", name: "Oglinda", component: OglindaComponent, useAsDefault: true },
    { path: "/login", name: "Login", component: LoginComponent },
    { path: "/register", name: "Register", component: RegisterComponent },
    { path: "/student-register", name: "StudentRegister", component: StudentRegisterComponent },
    { path: "/cazare-student", name: "CazareStudent", component: CazareStudentComponent },
    { path: "/cautare-student", name: "CautareStudent", component: CautareStudentComponent },
    { path: "/finalizare-cazare", name: "FinalizareCazare", component: FinalizareCazareComponent },
    { path: "/**", redirectTo: ["Oglinda"] }
])
@Component({
    selector: "app",
    templateUrl: "./app.template.html",
    directives: [ROUTER_DIRECTIVES, AuthRouter],
    providers: [ApiService, CacheService, StorageService, AuthService, CustomHttpService,
        ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]
})
export class AppComponent implements OnInit {
    constructor(http: CustomHttpService, private authService: AuthService, private router: Router) {
        http.subscribeErrorHandler(this.handleError.bind(this));
    }

    ngOnInit() {
    }

    logout() {
        this.authService.logout().then(() => {
            this.router.navigate(["/Login"]);
        });
    }

    errorMessage: string;
    private handleError(error: any) {
        this.errorMessage = JSON.stringify(error);
        ($("#errorModal") as any).modal("show");
        //$("#errorModal").on("hidden.bs.modal", () => {
        //});
    }
}