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
var router_deprecated_1 = require("@angular/router-deprecated");
var auth_service_1 = require("../../Infrastructure/Auth/auth.service");
var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        };
        this.isSubmitting = false;
    }
    RegisterComponent.prototype.register = function (username, email, password, firstName, lastName) {
        var _this = this;
        this.isSubmitting = true;
        this.authService.register(username, email, password, firstName, lastName).then(function () {
            _this.isSubmitting = false;
            _this.router.navigate(["Login"]);
        }).catch(function () { return _this.isSubmitting = false; });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "register",
            templateUrl: "Scripts/build/Components/Auth/register.template.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_deprecated_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
