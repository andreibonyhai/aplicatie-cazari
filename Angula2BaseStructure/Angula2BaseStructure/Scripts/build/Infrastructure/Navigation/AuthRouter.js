"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var auth_service_1 = require("../Auth/auth.service");
var AuthRouter = (function (_super) {
    __extends(AuthRouter, _super);
    function AuthRouter(viewContainerRef, loader, parentRouter, nameAttr, authService) {
        _super.call(this, viewContainerRef, loader, parentRouter, nameAttr);
        this.authService = authService;
        this.publicRoutes = {
            'login': true,
            'register': true
        };
        this.parentRouter = parentRouter;
    }
    AuthRouter.prototype.activate = function (instruction) {
        var url = instruction.urlPath;
        if (!this.publicRoutes[url] && !this.authService.IsLoggedIn) {
            this.parentRouter.navigateByUrl("/login");
        }
        if (this.publicRoutes[url] && this.authService.IsLoggedIn) {
            this.parentRouter.navigateByUrl("/");
        }
        return _super.prototype.activate.call(this, instruction);
    };
    AuthRouter = __decorate([
        core_1.Directive({
            selector: "router-outlet-secure"
        }),
        __param(3, core_1.Attribute("name")), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader, router_deprecated_1.Router, String, auth_service_1.AuthService])
    ], AuthRouter);
    return AuthRouter;
}(router_deprecated_1.RouterOutlet));
exports.AuthRouter = AuthRouter;
