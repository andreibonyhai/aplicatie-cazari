"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var AuthRouter_1 = require("../Infrastructure/Navigation/AuthRouter");
var api_service_1 = require("../Infrastructure/Api/api.service");
var custom_http_service_1 = require("../Infrastructure/Http/custom-http.service");
var cache_service_1 = require("../Infrastructure/Caching/cache.service");
var storage_service_1 = require("../Infrastructure/Storage/storage.service");
var auth_service_1 = require("../Infrastructure/Auth/auth.service");
var home_page_component_1 = require("../Components/HomePage/home-page.component");
var oglinda_component_1 = require("../Components/Oglinda/oglinda.component");
var login_component_1 = require("../Components/Auth/login.component");
var register_component_1 = require("../Components/Auth/register.component");
var student_register_component_1 = require("../Components/StudentRegister/student-register.component");
var cazare_student_component_1 = require("../Components/CazareStudent/cazare-student.component");
var cautare_student_component_1 = require("../Components/CautareStudent/cautare-student.component");
var finalizare_cazare_component_1 = require("../Components/FinalizareCazare/finalizare-cazare.component");
var AppComponent = (function () {
    function AppComponent(http, authService, router) {
        this.authService = authService;
        this.router = router;
        http.subscribeErrorHandler(this.handleError.bind(this));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            _this.router.navigate(["/Login"]);
        });
    };
    AppComponent.prototype.handleError = function (error) {
        this.errorMessage = JSON.stringify(error);
        $("#errorModal").modal("show");
        //$("#errorModal").on("hidden.bs.modal", () => {
        //});
    };
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            { path: "/home", name: "HomePage", component: home_page_component_1.HomePageComponent, useAsDefault: true },
            { path: "/oglinda", name: "Oglinda", component: oglinda_component_1.OglindaComponent },
            { path: "/login", name: "Login", component: login_component_1.LoginComponent },
            { path: "/register", name: "Register", component: register_component_1.RegisterComponent },
            { path: "/student-register", name: "StudentRegister", component: student_register_component_1.StudentRegisterComponent },
            { path: "/cazare-student", name: "CazareStudent", component: cazare_student_component_1.CazareStudentComponent },
            { path: "/cautare-student", name: "CautareStudent", component: cautare_student_component_1.CautareStudentComponent },
            { path: "/finalizare-cazare", name: "FinalizareCazare", component: finalizare_cazare_component_1.FinalizareCazareComponent },
            { path: "/**", redirectTo: ["HomePage"] }
        ]),
        core_1.Component({
            selector: "app",
            templateUrl: "./app.template.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, AuthRouter_1.AuthRouter],
            providers: [api_service_1.ApiService, cache_service_1.CacheService, storage_service_1.StorageService, auth_service_1.AuthService, custom_http_service_1.CustomHttpService,
                router_deprecated_1.ROUTER_PROVIDERS, core_2.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]
        }), 
        __metadata('design:paramtypes', [custom_http_service_1.CustomHttpService, auth_service_1.AuthService, router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map